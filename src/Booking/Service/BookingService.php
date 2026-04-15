<?php

declare(strict_types=1);

namespace App\Booking\Service;

use App\Entity\Ad;
use App\Entity\User;
use App\Entity\Booking;
use Doctrine\DBAL\LockMode;
use App\Repository\AdRepository;
use App\Booking\Enum\BookingStatus;
use App\Repository\BookingRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Booking\Exception\BookingConflictException;
use App\Booking\Exception\BookingValidationException;

final class BookingService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly BookingRepository $bookingRepository,
        private readonly AdRepository $adRepository,
        private readonly PricingService $pricingService,
    ) {
    }

    /**
     * Creates a booking safely against race conditions.
     *
     * Uses a PESSIMISTIC_WRITE lock on the listing (SELECT … FOR UPDATE)
     * to guarantee that only one thread can write a booking for a given listing
     * at a time. The conflict check is performed AFTER acquiring the lock,
     * making double bookings impossible.
     *
     * @throws BookingConflictException   The requested dates overlap an existing booking
     * @throws BookingValidationException The request fails business rule validation
     */
    public function createBooking(
        Ad $ad,
        User $booker,
        \DateTimeInterface $startDate,
        \DateTimeInterface $endDate,
        int $guestsCount = 1,
        ?string $comment = null,
    ): Booking {
        $this->validateBookingRequest($ad, $booker, $startDate, $endDate, $guestsCount);

        $booking = null;

        $this->entityManager->wrapInTransaction(
            function () use ($ad, $booker, $startDate, $endDate, $guestsCount, $comment, &$booking): void {
                // Acquire an exclusive row-level lock on the listing.
                // Any other transaction attempting to lock the same row
                // will block until this transaction commits or rolls back.
                /** @var Ad $lockedAd */
                $lockedAd = $this->adRepository->find($ad->getId(), LockMode::PESSIMISTIC_WRITE);

                // Re-check AFTER the lock — no race condition possible here.
                if ($this->bookingRepository->hasDateConflict($lockedAd, $startDate, $endDate)) {
                    throw new BookingConflictException(
                        sprintf(
                            'The dates %s → %s are not available for listing "%s".',
                            $startDate->format('Y-m-d'),
                            $endDate->format('Y-m-d'),
                            $lockedAd->getTitle(),
                        )
                    );
                }

                $amount = $this->pricingService->calculateAmount($lockedAd, $startDate, $endDate);

                $booking = new Booking();
                $booking
                    ->setAd($lockedAd)
                    ->setBooker($booker)
                    ->setStartDate($startDate)
                    ->setEndDate($endDate)
                    ->setGuestsCount($guestsCount)
                    ->setComment($comment)
                    ->setAmount($amount)
                    ->setStatus(BookingStatus::Pending);

                $this->entityManager->persist($booking);
                // flush() is called implicitly at the end of wrapInTransaction()
            }
        );

        return $booking;
    }

    /**
     * Confirms a booking (after successful payment or admin action).
     *
     * @throws BookingValidationException
     */
    public function confirmBooking(Booking $booking): void
    {
        if (!$booking->getStatus()->canTransitionTo(BookingStatus::Confirmed)) {
            throw new BookingValidationException(
                sprintf('Cannot confirm a booking with status "%s".', $booking->getStatus()->value)
            );
        }

        $this->entityManager->wrapInTransaction(function () use ($booking): void {
            $booking->confirm();
            $this->entityManager->flush();
        });
    }

    /**
     * Cancels a booking with an optional reason.
     *
     * @throws BookingValidationException
     */
    public function cancelBooking(Booking $booking, string $reason = ''): void
    {
        if (!$booking->getStatus()->canTransitionTo(BookingStatus::Cancelled)) {
            throw new BookingValidationException(
                sprintf('Cannot cancel a booking with status "%s".', $booking->getStatus()->value)
            );
        }

        $this->entityManager->wrapInTransaction(function () use ($booking, $reason): void {
            $booking->cancel($reason);
            $this->entityManager->flush();
        });
    }

    /**
     * Marks a booking as completed (stay has ended).
     *
     * @throws BookingValidationException
     */
    public function completeBooking(Booking $booking): void
    {
        if (!$booking->getStatus()->canTransitionTo(BookingStatus::Completed)) {
            throw new BookingValidationException(
                sprintf('Cannot complete a booking with status "%s".', $booking->getStatus()->value)
            );
        }

        $this->entityManager->wrapInTransaction(function () use ($booking): void {
            $booking->complete();
            $this->entityManager->flush();
        });
    }

    // ── Private validation ────────────────────────────────────────────────────

    private function validateBookingRequest(
        Ad $ad,
        User $booker,
        \DateTimeInterface $startDate,
        \DateTimeInterface $endDate,
        int $guestsCount,
    ): void {
        if (!$ad->isPublished()) {
            throw new BookingValidationException('This listing is not available for booking.');
        }

        if ($ad->getAuthor() === $booker) {
            throw new BookingValidationException('You cannot book your own listing.');
        }

        $today = new \DateTimeImmutable('today');
        if ($startDate < $today) {
            throw new BookingValidationException('The start date must be today or later.');
        }

        if ($endDate <= $startDate) {
            throw new BookingValidationException('The end date must be after the start date.');
        }

        if ($guestsCount < 1 || $guestsCount > $ad->getMaxGuests()) {
            throw new BookingValidationException(
                sprintf('This listing accepts between 1 and %d guest(s).', $ad->getMaxGuests())
            );
        }
    }
}
