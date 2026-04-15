<?php

declare(strict_types=1);

namespace App\Review\Service;

use App\Entity\User;
use App\Entity\Booking;
use App\Entity\Comment;
use App\Booking\Enum\BookingStatus;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

final class ReviewService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    /**
     * Soumet un avis après séjour avec validation complète des règles métier.
     *
     * Guards appliqués (dans l'ordre) :
     *   1. Seul le voyageur du booking peut laisser un avis
     *   2. Le séjour doit être terminé (status = Completed)
     *   3. Un seul avis par booking (idempotence)
     *   4. L'hôte ne peut pas noter son propre logement
     *
     * @throws AccessDeniedException    Guard 1 ou 4
     * @throws \LogicException          Guard 2 ou 3
     */
    public function submitReview(Booking $booking, Comment $review, User $author): void
    {
        // Guard 1 : seul le voyageur concerné peut noter
        if ($booking->getBooker() !== $author) {
            throw new AccessDeniedException(
                'Seul le voyageur de cette réservation peut laisser un avis.'
            );
        }

        // Guard 2 : le séjour doit être terminé
        if ($booking->getStatus() !== BookingStatus::Completed) {
            throw new \LogicException(
                'Les avis ne peuvent être soumis qu\'après la fin du séjour.'
            );
        }

        // Guard 3 : un seul avis par booking
        if ($booking->getReview() !== null) {
            throw new \LogicException(
                'Un avis a déjà été soumis pour cette réservation.'
            );
        }

        // Guard 4 : l'hôte ne peut pas noter son propre logement
        if ($booking->getAd()->getAuthor() === $author) {
            throw new AccessDeniedException(
                'Les hôtes ne peuvent pas noter leurs propres annonces.'
            );
        }

        $review
            ->setAuthor($author)
            ->setAd($booking->getAd())
            ->setBooking($booking);

        $this->entityManager->persist($review);
        $this->entityManager->flush();
    }

    /**
     * Vérifie si un utilisateur peut soumettre un avis pour un booking donné.
     * Utile pour afficher/masquer le formulaire dans les templates.
     */
    public function canReview(Booking $booking, User $user): bool
    {
        return $booking->getBooker() === $user
               && $booking->getStatus() === BookingStatus::Completed
               && $booking->getReview() === null
               && $booking->getAd()->getAuthor() !== $user;
    }
}
