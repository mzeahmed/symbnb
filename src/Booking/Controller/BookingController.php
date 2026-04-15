<?php

declare(strict_types=1);

namespace App\Booking\Controller;

use App\Entity\Ad;
use App\Entity\User;
use App\Entity\Booking;
use App\Entity\Comment;
use App\Booking\Form\BookingType;
use App\Comment\Form\CommentType;
use App\Review\Service\ReviewService;
use App\Booking\Service\BookingService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Booking\Exception\BookingConflictException;
use App\Booking\Exception\BookingValidationException;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BookingController extends AbstractController
{
    public function __construct(
        private readonly BookingService $bookingService,
        private readonly ReviewService $reviewService,
    ) {
    }

    #[Route('/ads/{slug}/book', name: 'booking_create', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function create(Ad $ad, Request $request): Response
    {
        // Un hôte ne peut pas réserver son propre logement — redirection rapide
        /** @var User $user */
        $user = $this->getUser();

        if ($ad->getAuthor() === $user) {
            $this->addFlash('warning', 'Vous ne pouvez pas réserver votre propre logement.');
            return $this->redirectToRoute('ad_show', ['slug' => $ad->getSlug()]);
        }

        $form = $this->createForm(BookingType::class, new Booking());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Booking $data */
            $data = $form->getData();

            try {
                $booking = $this->bookingService->createBooking(
                    ad: $ad,
                    booker: $user,
                    startDate: $data->getStartDate(),
                    endDate: $data->getEndDate(),
                    guestsCount: $data->getGuestsCount(),
                    comment: $data->getComment(),
                );

                $this->addFlash('success', 'Réservation créée ! En attente de confirmation.');
                return $this->redirectToRoute('booking_show', ['id' => $booking->getId()]);

            } catch (BookingConflictException $e) {
                $this->addFlash('warning', $e->getMessage());
            } catch (BookingValidationException $e) {
                $this->addFlash('danger', $e->getMessage());
            }
        }

        return $this->render('booking/book.html.twig', [
            'ad' => $ad,
            'form' => $form,
        ]);
    }

    #[Route('/booking/{id}', name: 'booking_show', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function show(Booking $booking, Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        // Seul le voyageur ou l'hôte concerné peut voir le détail d'une réservation
        $isBooker = $booking->getBooker() === $user;
        $isHost = $booking->getAd()->getAuthor() === $user;

        if (!$isBooker && !$isHost) {
            throw $this->createAccessDeniedException('Accès refusé.');
        }

        $canReview = $this->reviewService->canReview($booking, $user);
        $reviewForm = null;

        if ($canReview) {
            $comment = new Comment();
            $reviewForm = $this->createForm(CommentType::class, $comment);
            $reviewForm->handleRequest($request);

            if ($reviewForm->isSubmitted() && $reviewForm->isValid()) {
                try {
                    $this->reviewService->submitReview($booking, $comment, $user);
                    $this->addFlash('success', 'Votre avis a bien été soumis.');
                    return $this->redirectToRoute('booking_show', ['id' => $booking->getId()]);
                } catch (\LogicException | \Symfony\Component\Security\Core\Exception\AccessDeniedException $e) {
                    $this->addFlash('danger', $e->getMessage());
                }
            }
        }

        return $this->render('booking/show.html.twig', [
            'booking' => $booking,
            'canReview' => $canReview,
            'reviewForm' => $reviewForm,
        ]);
    }
}
