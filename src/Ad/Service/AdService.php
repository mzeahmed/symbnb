<?php

declare(strict_types=1);

namespace App\Ad\Service;

use App\Entity\Ad;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class AdService
{
    public function __construct(private readonly EntityManagerInterface $manager)
    {
    }

    public function save(Ad $ad, ?UserInterface $author = null): void
    {
        if ($author !== null) {
            $ad->setAuthor($author);
        }

        foreach ($ad->getImages() as $image) {
            $image->setAd($ad);
            $this->manager->persist($image);
        }

        $this->manager->persist($ad);
        $this->manager->flush();
    }

    public function delete(Ad $ad): void
    {
        $this->manager->remove($ad);
        $this->manager->flush();
    }
}
