<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Amenity;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Amenity>
 */
class AmenityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Amenity::class);
    }

    /** @return Amenity[] grouped by groupName */
    public function findAllGrouped(): array
    {
        $amenities = $this->findBy([], ['groupName' => 'ASC', 'name' => 'ASC']);
        $grouped = [];

        foreach ($amenities as $amenity) {
            $grouped[$amenity->getGroupName() ?? 'Autres'][] = $amenity;
        }

        return $grouped;
    }
}
