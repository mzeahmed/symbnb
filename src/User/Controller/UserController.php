<?php

declare(strict_types=1);

namespace App\User\Controller;

use App\Entity\User;
use App\User\Form\AccountType;
use App\User\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $manager,
    ) {
    }

    #[Route('/user/{slug}', name: 'user_show')]
    public function show(User $user): Response
    {
        return $this->render('user/index.html.twig', ['user' => $user]);
    }

    #[Route('/become-a-host', name: 'host_request')]
    #[IsGranted('ROLE_USER')]
    public function hostRequest(): Response
    {
        // TODO: implement host request form/logic
        return $this->render('user/host_request.html.twig');
    }

    #[Route('/account', name: 'account_index')]
    #[IsGranted('ROLE_USER')]
    public function myAccount(): Response
    {
        return $this->render('user/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    #[Route('/account/bookings', name: 'app_user_bookings')]
    #[IsGranted('ROLE_USER')]
    public function bookings(): Response
    {
        return $this->render('user/bookings.html.twig');
    }

    #[Route('/account/settings', name: 'app_user_settings')]
    #[IsGranted('ROLE_USER')]
    public function profile(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $form = $this->createForm(AccountType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($user);
            $this->manager->flush();

            $this->addFlash('success', 'Profile data has been updated successfully!');
        }

        return $this->render('user/settings.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}