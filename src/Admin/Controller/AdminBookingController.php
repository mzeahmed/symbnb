<?php

declare(strict_types=1);

namespace App\Admin\Controller;

use App\Entity\Booking;
use App\Admin\Form\AdminBookingType;
use Doctrine\ORM\EntityManagerInterface;
use App\Shared\Service\PaginationService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminBookingController extends AbstractController
{
    #[Route('/admin/bookings/{page<\d+>?1}', name: 'admin_booking_index')]
    public function index(int $page, PaginationService $pagination): Response
    {
        $pagination->setEntityClass(Booking::class)->setPage($page);

        return $this->render('admin/booking/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/admin/bookings/{id}/edit', name: 'admin_booking_edit')]
    public function edit(Booking $booking, Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(AdminBookingType::class, $booking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $booking->setAmount(0);
            $manager->persist($booking);
            $manager->flush();

            $this->addFlash('success', "Booking #{$booking->getId()} has been updated successfully.");

            return $this->redirectToRoute('admin_booking_index');
        }

        return $this->render('admin/booking/edit.html.twig', [
            'form' => $form->createView(),
            'booking' => $booking,
        ]);
    }

    #[Route('/admin/bookings/{id}/delete', name: 'admin_booking_delete')]
    public function delete(Booking $booking, EntityManagerInterface $manager): RedirectResponse
    {
        $manager->remove($booking);
        $manager->flush();

        $this->addFlash('success', 'The booking has been deleted successfully.');

        return $this->redirectToRoute('admin_booking_index');
    }
}
