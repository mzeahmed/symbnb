<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Ad;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Ad|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ad|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ad[]    findAll()
 * @method Ad[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ad::class);
    }

    /**
     * Retourne les meilleures annonces publiées, triées par note moyenne descendante.
     * Utilise HIDDEN pour éviter d'exposer la colonne calculée dans le résultat Doctrine.
     *
     * @return Ad[]
     */
    public function findBestAds(int $limit): array
    {
        return $this->createQueryBuilder('a')
            ->select('a, AVG(c.rating) as HIDDEN avgRating')
            ->join('a.comments', 'c')
            ->where('a.isPublished = true')
            ->groupBy('a.id')
            ->orderBy('avgRating', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les annonces publiées avec leur auteur et catégorie en JOIN FETCH
     * pour éviter les requêtes N+1 lors de l'affichage des listings.
     *
     * @return Ad[]
     */
    public function findPublishedWithAuthor(int $page = 1, int $limit = 12): array
    {
        return $this->createQueryBuilder('a')
            ->addSelect('u', 'c')
            ->join('a.author', 'u')
            ->leftJoin('a.category', 'c')
            ->where('a.isPublished = true')
            ->orderBy('a.createdAt', 'DESC')
            ->setFirstResult(($page - 1) * $limit)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Compte les annonces publiées — utilisé pour la pagination.
     */
    public function countPublished(): int
    {
        return (int) $this->createQueryBuilder('a')
            ->select('COUNT(a.id)')
            ->where('a.isPublished = true')
            ->getQuery()
            ->getSingleScalarResult();
    }
}
