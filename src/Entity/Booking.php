<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Booking\Enum\BookingStatus;
use App\Repository\BookingRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
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
     * Total price — set by PricingService before persist, never by the entity itself.
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

    /**
     * Payment attempts for this booking — OneToMany because a booking
     * can have multiple attempts (failed + retry) before a successful payment.
     */
    #[ORM\OneToMany(targetEntity: Payment::class, mappedBy: 'booking', cascade: ['persist'])]
    private Collection $payments;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->payments = new ArrayCollection();
    }

    // ── State machine ─────────────────────────────────────────────────────────

    public function confirm(): void
    {
        $this->status = BookingStatus::Confirmed;
    }

    public function complete(): void
    {
        $this->status = BookingStatus::Completed;
    }

    public function cancel(string $reason = ''): void
    {
        $this->status = BookingStatus::Cancelled;
        $this->cancelledAt = new \DateTimeImmutable();
        $this->cancellationReason = $reason ?: null;
    }

    // ── Pure helpers (no dependencies) ────────────────────────────────────────

    public function getDuration(): int
    {
        if ($this->startDate === null || $this->endDate === null) {
            return 0;
        }

        return (int) $this->endDate->diff($this->startDate)->days;
    }

    // ── Getters / Setters ─────────────────────────────────────────────────────

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBooker(): ?User
    {
        return $this->booker;
    }

    public function setBooker(?User $booker): static
    {
        $this->booker = $booker;

        return $this;
    }

    public function getAd(): ?Ad
    {
        return $this->ad;
    }

    public function setAd(?Ad $ad): static
    {
        $this->ad = $ad;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): static
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): static
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

    public function setAmount(string | float $amount): static
    {
        $this->amount = (string) $amount;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): static
    {
        $this->comment = $comment;

        return $this;
    }

    public function getStatus(): BookingStatus
    {
        return $this->status;
    }

    public function setStatus(BookingStatus $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getGuestsCount(): int
    {
        return $this->guestsCount;
    }

    public function setGuestsCount(int $guestsCount): static
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

    public function setReview(?Comment $review): static
    {
        if ($review !== null && $review->getBooking() !== $this) {
            $review->setBooking($this);
        }
        $this->review = $review;

        return $this;
    }

    public function getPayments(): Collection
    {
        return $this->payments;
    }
}
