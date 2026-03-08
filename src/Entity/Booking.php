<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BookingRepository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Booking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'bookings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $booker = null;

    #[ORM\ManyToOne(targetEntity: Ad::class, inversedBy: 'bookings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Ad $ad = null;

    /**
     * Using DATE (not DATETIME) — only the day matters for availability.
     */
    #[ORM\Column(type: 'date')]
    #[Assert\NotNull]
    #[Assert\GreaterThan(value: 'today', message: 'The arrival date must be later than today.', groups: ['front'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: 'date')]
    #[Assert\NotNull]
    #[Assert\GreaterThan(propertyPath: 'startDate', message: 'The departure date must be after the arrival date.')]
    private ?\DateTimeInterface $endDate = null;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    /**
     * Total price stored as NUMERIC(10,2) for monetary precision.
     */
    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    private ?string $amount = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $comment = null;

    #[ORM\Column(length: 20, enumType: BookingStatus::class)]
    private BookingStatus $status = BookingStatus::Pending;

    #[ORM\Column]
    #[Assert\Positive]
    #[Assert\LessThanOrEqual(value: 50)]
    private int $guestsCount = 1;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $cancelledAt = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $cancellationReason = null;

    /**
     * One review per booking — nullable because review is written after stay.
     */
    #[ORM\OneToOne(targetEntity: Comment::class, mappedBy: 'booking', cascade: ['persist', 'remove'])]
    private ?Comment $review = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function prePersist(): void
    {
        if ($this->amount === null || (float) $this->amount === 0.0) {
            $this->amount = (string) ($this->ad->getPriceAsFloat() * $this->getDuration());
        }
    }

    // ── Domain helpers ────────────────────────────────────────────────────────

    /**
     * Returns false if any chosen day overlaps an existing confirmed/pending booking.
     */
    public function isBookableDates(): bool
    {
        $unavailable = array_map(
            fn (\DateTimeInterface $d) => $d->format('Y-m-d'),
            $this->ad->getNotAvailableDays()
        );

        foreach ($this->getDays() as $day) {
            if (in_array($day->format('Y-m-d'), $unavailable, true)) {
                return false;
            }
        }

        return true;
    }

    /** @return \DateTime[] */
    public function getDays(): array
    {
        $timestamps = range(
            $this->startDate->getTimestamp(),
            $this->endDate->getTimestamp(),
            86400
        );

        return array_map(
            fn (int $ts) => new \DateTime(date('Y-m-d', $ts)),
            $timestamps
        );
    }

    public function getDuration(): int
    {
        return (int) $this->endDate->diff($this->startDate)->days;
    }

    public function cancel(string $reason = ''): void
    {
        $this->status = BookingStatus::Cancelled;
        $this->cancelledAt = new \DateTimeImmutable();
        $this->cancellationReason = $reason ?: null;
    }

    public function confirm(): void
    {
        $this->status = BookingStatus::Confirmed;
    }

    public function complete(): void
    {
        $this->status = BookingStatus::Completed;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBooker(): ?User
    {
        return $this->booker;
    }

    public function setBooker(?User $booker): self
    {
        $this->booker = $booker;

        return $this;
    }

    public function getAd(): ?Ad
    {
        return $this->ad;
    }

    public function setAd(?Ad $ad): self
    {
        $this->ad = $ad;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string | float $amount): self
    {
        $this->amount = (string) $amount;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getStatus(): BookingStatus
    {
        return $this->status;
    }

    public function setStatus(BookingStatus $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getGuestsCount(): int
    {
        return $this->guestsCount;
    }

    public function setGuestsCount(int $guestsCount): self
    {
        $this->guestsCount = $guestsCount;

        return $this;
    }

    public function getCancelledAt(): ?\DateTimeImmutable
    {
        return $this->cancelledAt;
    }

    public function getCancellationReason(): ?string
    {
        return $this->cancellationReason;
    }

    public function getReview(): ?Comment
    {
        return $this->review;
    }

    public function setReview(?Comment $review): self
    {
        if ($review !== null && $review->getBooking() !== $this) {
            $review->setBooking($this);
        }
        $this->review = $review;

        return $this;
    }
}
