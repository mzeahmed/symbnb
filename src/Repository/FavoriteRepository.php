<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Ad;
use App\Entity\User;
use App\Entity\Favorite;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Favorite>
 */
class FavoriteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Favorite::class);
    }

    public function findOneByUserAndAd(User $user, Ad $ad): ?Favorite
    {
        return $this->findOneBy(['user' => $user, 'ad' => $ad]);
    }

    /** @return Favorite[] */
    public function findByUser(User $user): array
    {
        return $this->createQueryBuilder('f')
            ->join('f.ad', 'a')
            ->addSelect('a')
            ->where('f.user = :user')
            ->setParameter('user', $user)
            ->orderBy('f.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
