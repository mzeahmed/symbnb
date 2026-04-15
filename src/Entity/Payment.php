<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Payment\Enum\PaymentStatus;
use App\Repository\PaymentRepository;

#[ORM\Entity(repositoryClass: PaymentRepository::class)]
class Payment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Un booking peut avoir plusieurs tentatives de paiement (OneToMany, pas OneToOne).
     * Cela permet de conserver l'historique : échec + nouvelle tentative + succès.
     */
    #[ORM\ManyToOne(targetEntity: Booking::class, inversedBy: 'payments')]
    #[ORM\JoinColumn(nullable: false)]
    private Booking $booking;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    private string $amount;

    #[ORM\Column(length: 3)]
    private string $currency = 'EUR';

    #[ORM\Column(length: 20, enumType: PaymentStatus::class)]
    private PaymentStatus $status = PaymentStatus::Pending;

    #[ORM\Column(length: 50)]
    private string $provider = 'stripe';

    /**
     * Stripe PaymentIntent ID (pi_xxx).
     * Index UNIQUE pour garantir l'idempotence des webhooks Stripe.
     */
    #[ORM\Column(length: 255, unique: true, nullable: true)]
    private ?string $providerPaymentId = null;

    /**
     * Stripe Charge ID (ch_xxx) — disponible uniquement après paiement réussi.
     */
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $providerChargeId = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $failureReason = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $paidAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $refundedAt = null;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    public function __construct(Booking $booking, string $amount, string $currency = 'EUR')
    {
        $this->booking = $booking;
        $this->amount = $amount;
        $this->currency = $currency;
        $this->createdAt = new \DateTimeImmutable();
    }

    public function markAsPaid(string $chargeId): void
    {
        $this->assertTransitionAllowed(PaymentStatus::Paid);
        $this->status = PaymentStatus::Paid;
        $this->providerChargeId = $chargeId;
        $this->paidAt = new \DateTimeImmutable();
    }

    public function markAsFailed(string $reason): void
    {
        $this->assertTransitionAllowed(PaymentStatus::Failed);
        $this->status = PaymentStatus::Failed;
        $this->failureReason = $reason;
    }

    public function markAsRefunded(): void
    {
        $this->assertTransitionAllowed(PaymentStatus::Refunded);
        $this->status = PaymentStatus::Refunded;
        $this->refundedAt = new \DateTimeImmutable();
    }

    public function expire(): void
    {
        $this->assertTransitionAllowed(PaymentStatus::Expired);
        $this->status = PaymentStatus::Expired;
    }

    private function assertTransitionAllowed(PaymentStatus $next): void
    {
        if (!$this->status->canTransitionTo($next)) {
            throw new \LogicException(
                sprintf(
                    'Cannot transition payment from "%s" to "%s".',
                    $this->status->value,
                    $next->value,
                )
            );
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBooking(): Booking
    {
        return $this->booking;
    }

    public function getAmount(): string
    {
        return $this->amount;
    }

    public function getCurrency(): string
    {
        return $this->currency;
    }

    public function getStatus(): PaymentStatus
    {
        return $this->status;
    }

    public function getProvider(): string
    {
        return $this->provider;
    }

    public function getProviderPaymentId(): ?string
    {
        return $this->providerPaymentId;
    }

    public function setProviderPaymentId(string $id): static
    {
        $this->providerPaymentId = $id;

        return $this;
    }

    public function getProviderChargeId(): ?string
    {
        return $this->providerChargeId;
    }

    public function getFailureReason(): ?string
    {
        return $this->failureReason;
    }

    public function getPaidAt(): ?\DateTimeImmutable
    {
        return $this->paidAt;
    }

    public function getRefundedAt(): ?\DateTimeImmutable
    {
        return $this->refundedAt;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }
}
