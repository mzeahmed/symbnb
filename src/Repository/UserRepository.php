<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', $user::class));
        }

        $user->setPassword($newHashedPassword);
        $this->getEntityManager()->persist($user);
        $this->getEntityManager()->flush();
    }

    public function getAvailableSlug(string $baseSlug, ?int $excludedUserId = null): string
    {
        $slug = $baseSlug;
        $suffix = 2;

        while ($this->slugExists($slug, $excludedUserId)) {
            $slug = sprintf('%s-%d', $baseSlug, $suffix);
            ++$suffix;
        }

        return $slug;
    }

    public function slugExists(string $slug, ?int $excludedUserId = null): bool
    {
        $qb = $this->createQueryBuilder('u')
            ->select('COUNT(u.id)')
            ->andWhere('u.slug = :slug')
            ->setParameter('slug', $slug);

        if ($excludedUserId !== null) {
            $qb->andWhere('u.id != :excludedUserId')
                ->setParameter('excludedUserId', $excludedUserId);
        }

        return (int) $qb->getQuery()->getSingleScalarResult() > 0;
    }

    public function findBestUsers(int $limit = 2)
    {
        return $this->createQueryBuilder('u')
                    ->join('u.ads', 'a')
                    ->join('a.comments', 'c')
                    ->select('u as user, AVG(c.rating) as avgRating, COUNT(c) as sumComments')
                    ->groupBy('u')
                    ->having('COUNT(c) > 3')
                    ->orderBy('avgRating', 'DESC')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult();
    }
}
