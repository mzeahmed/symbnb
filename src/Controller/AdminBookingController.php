<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Form\AdminBookingType;
use App\Service\PaginationService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminBookingController extends AbstractController
{
    /**
     * Permet d'afficher les reservations
     *
     * @Route("/admin/bookings/{page<\d+>?1}", name="admin_booking_index")
     *
     * @param $page
     * @param PaginationService $pagination
     * @return Response
     */
    public function index($page, PaginationService $pagination): Response
    {
        $pagination->setEntityClass(Booking::class);
        $pagination->setPage($page);

        return $this->render('admin/booking/index.html.twig', [
            'pagination' => $pagination
        ]);
    }

    /**
     * Permet d'editer une réservation
     *
     * @Route("/admin/bookings/{id}/edit", name="admin_booking_edit")
     *
     * @param Booking                $booking
     * @param Request                $request
     * @param EntityManagerInterface $manager
     *
     * @return Response
     */
    public function edit(Booking $booking, Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(AdminBookingType::class, $booking);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $booking->setAmount(0); // le montant sera recalculé automaiquement par la methode Booking->prePersist()

            $manager->persist($booking);
            $manager->flush();

            $this->addFlash('success', "La réservation n°{$booking->getId()} a bien été modifiée");

            return $this->redirectToRoute('admin_booking_index');
        }

        return $this->render('admin/booking/edit.html.twig', [
            'form' => $form->createView(),
            'booking' => $booking
        ]);
    }

    /**
     * Permet de supprimer une reservation
     *
     * @Route("/admin/bookings/{id}/delete", name="admin_booking_delete")
     *
     * @param Booking                $booking
     * @param EntityManagerInterface $manager
     *
     * @return RedirectResponse
     */
    public function delete(Booking $booking, EntityManagerInterface $manager): RedirectResponse
    {
        $manager->remove($booking);
        $manager->flush();

        $this->addFlash('success', "La réservation a bien été supprimée");

        return $this->redirectToRoute('admin_booking_index');
    }
}
