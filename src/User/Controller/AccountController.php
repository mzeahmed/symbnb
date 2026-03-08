<?php

declare(strict_types=1);

namespace App\User\Controller;

use App\Entity\User;
use App\Entity\PasswordUpdate;
use App\User\Form\AccountType;
use App\User\Service\UserService;
use App\User\Form\RegistrationType;
use App\User\Form\PasswordUpdateType;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AccountController extends AbstractController
{
    public function __construct(private readonly UserService $userService)
    {
    }

    #[Route('/login', name: 'account_login')]
    public function login(AuthenticationUtils $utils): Response
    {
        $error = $utils->getLastAuthenticationError();
        $username = $utils->getLastUsername();

        return $this->render('account/login.html.twig', [
            'hasError' => $error !== null,
            'username' => $username,
        ]);
    }

    #[Route('/logout', name: 'account_logout')]
    public function logout(): void
    {
    }

    #[Route('/register', name: 'account_register')]
    public function register(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->userService->register($user);

            $this->addFlash('success', 'Your account has been created! You can now log in!');

            return $this->redirectToRoute('account_login');
        }

        return $this->render('account/registration.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/account/profile', name: 'account_profile')]
    #[IsGranted('ROLE_USER')]
    public function profile(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $form = $this->createForm(AccountType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->userService->updateProfile($user);
            $this->addFlash('success', 'Profile data has been updated successfully!');
        }

        return $this->render('account/profile.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/account/password-update', name: 'account_password')]
    #[IsGranted('ROLE_USER')]
    public function updatePassword(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $passwordUpdate = new PasswordUpdate();
        $form = $this->createForm(PasswordUpdateType::class, $passwordUpdate);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$this->userService->isCurrentPassword($user, $passwordUpdate->getOldPassword())) {
                $form->get('oldPassword')->addError(new FormError('The password you entered is not your current password!'));
            } else {
                $this->userService->updatePassword($user, $passwordUpdate->getNewPassword());
                $this->addFlash('success', 'Your password has been updated successfully.');

                return $this->redirectToRoute('homepage');
            }
        }

        return $this->render('account/password.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/account', name: 'account_index')]
    #[IsGranted('ROLE_USER')]
    public function myAccount(): Response
    {
        return $this->render('user/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    #[Route('/account/bookings', name: 'account_bookings')]
    public function bookings(): Response
    {
        return $this->render('account/bookings.html.twig');
    }
}
