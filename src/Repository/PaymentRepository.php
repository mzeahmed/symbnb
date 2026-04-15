<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Payment;
use App\Payment\Enum\PaymentStatus;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Payment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Payment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Payment[]    findAll()
 * @method Payment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Payment::class);
    }

    /**
     * Recherche un paiement par son ID provider (Stripe PaymentIntent ID).
     * Utilisé pour le traitement idempotent des webhooks.
     */
    public function findOneByProviderPaymentId(string $providerPaymentId): ?Payment
    {
        return $this->findOneBy(['providerPaymentId' => $providerPaymentId]);
    }

    /**
     * Retourne le paiement réussi d'un booking, s'il existe.
     */
    public function findSuccessfulPaymentForBooking(int $bookingId): ?Payment
    {
        return $this->createQueryBuilder('p')
                    ->where('p.booking = :bookingId')
                    ->andWhere('p.status = :status')
                    ->setParameter('bookingId', $bookingId)
                    ->setParameter('status', PaymentStatus::Paid)
                    ->setMaxResults(1)
                    ->getQuery()
                    ->getOneOrNullResult();
    }
}
