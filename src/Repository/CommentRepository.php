<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Comment;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comment::class);
    }

    /**
     * Calcule la note moyenne d'une annonce via une requête SQL agrégée.
     * Remplace Ad::getAvgRatings() qui chargeait tous les comments en mémoire.
     */
    public function getAverageRatingForAd(int $adId): float
    {
        $result = $this->createQueryBuilder('c')
            ->select('AVG(c.rating) as avg')
            ->where('c.ad = :adId')
            ->setParameter('adId', $adId)
            ->getQuery()
            ->getSingleScalarResult();

        return round((float) $result, 1);
    }

    /**
     * Retourne les avis d'une annonce avec l'auteur en JOIN FETCH.
     *
     * @return Comment[]
     */
    public function findByAdWithAuthor(int $adId): array
    {
        return $this->createQueryBuilder('c')
            ->addSelect('u')
            ->join('c.author', 'u')
            ->where('c.ad = :adId')
            ->setParameter('adId', $adId)
            ->orderBy('c.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
