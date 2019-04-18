<?php

namespace App\Service;

use Doctrine\Common\Persistence\ObjectManager;

class StatsService
{
    /**
     * Le manager de Doctrine qui nous permet notamment de trouver le repository dont on a besoin
     *
     * @var ObjectManager
     */
    private $manager;

    public function __construct(ObjectManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Recuperation des statistiques
     *
     * @return array
     */
    public function getStats()
    {
        $users = $this->getUsersCount();
        $ads = $this->getAdsCount();
        $bookings = $this->getBookingsCount();
        $comments = $this->getCommentsCount();

        return compact('users', 'ads', 'bookings', 'comments');
    }

    /**
     * Recuperation du nombres d'utilisateurs
     *
     * @return mixed
     */
    public function getUsersCount()
    {
        return $this->manager->createQuery('SELECT COUNT(u) FROM App\Entity\User u')->getSingleScalarResult();
    }

    /**
     * recuperation du nombre d'annonces
     *
     * @return mixed
     */
    public function getAdsCount()
    {
        return $this->manager->createQuery('SELECT COUNT(a) FROM App\Entity\Ad a')->getSingleScalarResult();
    }

    /**
     * Recupertaion du nombres de reservations
     *
     * @return mixed
     */
    public function getBookingsCount()
    {
        return $this->manager->createQuery('SELECT COUNT(b) FROM App\Entity\Booking b')->getSingleScalarResult();
    }

    /**
     * recuperation du nombre de commentaires
     *
     * @return mixed
     */
    public function getCommentsCount()
    {
        return $this->manager->createQuery('SELECT COUNT(c) FROM App\Entity\Comment c')->getSingleScalarResult();
    }

    /**
     * Recuperation des statistiques des annonces
     *
     * @param $direction
     * @return mixed
     */
    public function getAdsStats($direction)
    {
        return $this->manager->createQuery(
            "SELECT AVG (c.rating) as note, a.title, a.id, u.firstName, u.lastName, u.picture
            FROM App\Entity\Comment c
            JOIN c.ad a
            JOIN a.author u
            GROUP BY a
            ORDER BY note " . $direction
        )->setMaxresults(5)->getresult();
    }
}