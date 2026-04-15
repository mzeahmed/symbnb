<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Ad;
use App\Entity\Booking;
use App\Booking\Enum\BookingStatus;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Booking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Booking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Booking[]    findAll()
 * @method Booking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
    }

    /**
     * Détecte un chevauchement de dates avec les réservations actives d'une annonce.
     *
     * Algorithme Allen : deux intervalles [A,B] et [C,D] se chevauchent
     * si et seulement si A < D AND B > C.
     *
     * Seuls les statuts Pending et Confirmed bloquent les dates.
     * Cancelled et Completed libèrent les créneaux.
     *
     * @param int|null $excludeBookingId Exclure un booking existant (utile lors d'une modification)
     */
    public function hasDateConflict(
        Ad $ad,
        \DateTimeInterface $startDate,
        \DateTimeInterface $endDate,
        ?int $excludeBookingId = null,
    ): bool {
        $qb = $this->createQueryBuilder('b')
                   ->select('COUNT(b.id)')
                   ->where('b.ad = :ad')
                   ->andWhere('b.status IN (:activeStatuses)')
                   ->andWhere('b.startDate < :endDate')
                   ->andWhere('b.endDate > :startDate')
                   ->setParameter('ad', $ad)
                   ->setParameter('activeStatuses', [
                       BookingStatus::Pending,
                       BookingStatus::Confirmed,
                   ])
                   ->setParameter('startDate', $startDate)
                   ->setParameter('endDate', $endDate);

        if ($excludeBookingId !== null) {
            $qb->andWhere('b.id != :excludeId')
               ->setParameter('excludeId', $excludeBookingId);
        }

        return (int) $qb->getQuery()->getSingleScalarResult() > 0;
    }

    /**
     * Retourne les plages de dates bloquées pour une annonce dans une fenêtre temporelle.
     * Utilisé pour alimenter le calendrier de disponibilité côté frontend.
     *
     * @return array<array{start: \DateTimeInterface, end: \DateTimeInterface}>
     */
    public function findBlockedRanges(
        Ad $ad,
        \DateTimeInterface $from,
        \DateTimeInterface $to,
    ): array {
        return $this->createQueryBuilder('b')
                    ->select('b.startDate as start, b.endDate as end')
                    ->where('b.ad = :ad')
                    ->andWhere('b.status IN (:activeStatuses)')
                    ->andWhere('b.startDate < :to')
                    ->andWhere('b.endDate > :from')
                    ->setParameter('ad', $ad)
                    ->setParameter('activeStatuses', [
                        BookingStatus::Pending,
                        BookingStatus::Confirmed,
                    ])
                    ->setParameter('from', $from)
                    ->setParameter('to', $to)
                    ->getQuery()
                    ->getArrayResult();
    }

    /**
     * Récupère les réservations d'un utilisateur avec JOIN FETCH sur l'annonce
     * pour éviter les requêtes N+1 dans les templates.
     *
     * @return Booking[]
     */
    public function findByBookerWithAd(int $userId): array
    {
        return $this->createQueryBuilder('b')
                    ->addSelect('a')
                    ->join('b.ad', 'a')
                    ->where('b.booker = :userId')
                    ->setParameter('userId', $userId)
                    ->orderBy('b.startDate', 'DESC')
                    ->getQuery()
                    ->getResult();
    }
}
