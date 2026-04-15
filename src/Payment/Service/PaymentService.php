<?php

declare(strict_types=1);

namespace App\Payment\Service;

use App\Entity\Booking;
use App\Entity\Payment;
use App\Payment\Enum\PaymentStatus;
use App\Repository\PaymentRepository;
use Doctrine\ORM\EntityManagerInterface;

final class PaymentService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly PaymentRepository $paymentRepository,
    ) {
    }

    /**
     * Initialise un paiement pour un booking.
     * Appelé quand l'utilisateur clique sur "Payer".
     *
     * TODO: intégrer le SDK Stripe pour créer un PaymentIntent
     * et stocker le client_secret à renvoyer au frontend.
     */
    public function initiate(Booking $booking, string $currency = 'EUR'): Payment
    {
        $payment = new Payment($booking, $booking->getAmount(), $currency);

        // TODO: $intent = $this->stripeClient->paymentIntents->create([
        //     'amount'   => (int) ($booking->getAmount() * 100),  // Stripe en centimes
        //     'currency' => strtolower($currency),
        //     'metadata' => ['booking_id' => $booking->getId()],
        // ]);
        // $payment->setProviderPaymentId($intent->id);

        $this->entityManager->persist($payment);
        $this->entityManager->flush();

        return $payment;
    }

    /**
     * Traite un paiement réussi — appelé par le webhook Stripe.
     *
     * IDEMPOTENT : si le même providerPaymentId est reçu deux fois
     * (retry Stripe), le second appel est ignoré silencieusement.
     *
     * @throws \RuntimeException Si l'ID provider est inconnu
     */
    public function handleSuccess(string $providerPaymentId, string $chargeId): void
    {
        $payment = $this->paymentRepository->findOneByProviderPaymentId($providerPaymentId);

        if ($payment === null) {
            throw new \RuntimeException(
                sprintf('Unknown payment intent: %s', $providerPaymentId)
            );
        }

        // Idempotence : déjà traité → on ignore
        if ($payment->getStatus() === PaymentStatus::Paid) {
            return;
        }

        $this->entityManager->wrapInTransaction(function () use ($payment, $chargeId): void {
            $payment->markAsPaid($chargeId);

            // La confirmation du booking est déclenchée uniquement par le paiement
            $payment->getBooking()->confirm();

            $this->entityManager->flush();
        });
    }

    /**
     * Traite un échec de paiement — appelé par le webhook Stripe.
     */
    public function handleFailure(string $providerPaymentId, string $reason): void
    {
        $payment = $this->paymentRepository->findOneByProviderPaymentId($providerPaymentId);

        if ($payment === null || $payment->getStatus()->isFinal()) {
            return;
        }

        $payment->markAsFailed($reason);
        $this->entityManager->flush();
    }

    /**
     * Rembourse un paiement et annule la réservation associée.
     *
     * @throws \LogicException Si le paiement n'est pas dans un état remboursable
     */
    public function refund(Payment $payment, string $cancelReason = ''): void
    {
        // TODO: $this->stripeClient->refunds->create([
        //     'charge' => $payment->getProviderChargeId(),
        // ]);

        $this->entityManager->wrapInTransaction(function () use ($payment, $cancelReason): void {
            $payment->markAsRefunded();
            $payment->getBooking()->cancel($cancelReason ?: 'Remboursé.');
            $this->entityManager->flush();
        });
    }

    /**
     * Expire un paiement non finalisé (appelable par un cron/scheduler).
     */
    public function expire(Payment $payment): void
    {
        if ($payment->getStatus()->isFinal()) {
            return;
        }

        $payment->expire();
        $this->entityManager->flush();
    }
}
