<?php

declare(strict_types=1);

namespace App\Booking\Controller;

use App\Entity\Ad;
use App\Entity\Booking;
use App\Entity\Comment;
use App\Booking\Form\BookingType;
use App\Comment\Form\CommentType;
use App\Booking\Service\BookingService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BookingController extends AbstractController
{
    public function __construct(private readonly BookingService $bookingService)
    {
    }

    #[Route('/ads/{slug}/book', name: 'booking_create')]
    #[IsGranted('ROLE_USER')]
    public function book(Ad $ad, Request $request): Response
    {
        $booking = new Booking();
        $form = $this->createForm(BookingType::class, $booking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $created = $this->bookingService->createBooking($booking, $ad, $this->getUser());

            if (!$created) {
                $this->addFlash('warning', 'The selected dates are not available.');
            } else {
                return $this->redirectToRoute('booking_show', ['id' => $booking->getId(), 'withAlert' => true]);
            }
        }

        return $this->render('booking/book.html.twig', [
            'ad' => $ad,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/booking/{id}', name: 'booking_show')]
    public function show(Booking $booking, Request $request, EntityManagerInterface $manager): Response
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setAd($booking->getAd())
                    ->setAuthor($this->getUser());

            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', 'Your comment has been submitted successfully.');
        }

        return $this->render('booking/show.html.twig', [
            'booking' => $booking,
            'form' => $form->createView(),
        ]);
    }
}
