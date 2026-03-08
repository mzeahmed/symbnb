<?php

declare(strict_types=1);

namespace App\Booking\Service;

use App\Entity\Ad;
use App\Entity\Booking;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class BookingService
{
    public function __construct(private readonly EntityManagerInterface $manager)
    {
    }

    public function createBooking(Booking $booking, Ad $ad, UserInterface $user): bool
    {
        $booking->setBooker($user)->setAd($ad);

        if (!$booking->isBookableDates()) {
            return false;
        }

        $this->manager->persist($booking);
        $this->manager->flush();

        return true;
    }
}
