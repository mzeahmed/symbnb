<?php

declare(strict_types=1);

namespace App\Security\Controller;

use App\Entity\User;
use App\Security\RegisterUser;
use App\Repository\UserRepository;
use App\User\Form\RegistrationType;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route(path: "/register", name: "app_register")]
    public function register(Request $request, RegisterUser $register, UserRepository $userRepository): Response
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        $bestUsers = $userRepository->findBestUsers(5);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var string $plainPassword */
            $plainPassword = $form->get('password')->getData();

            $passwordConfirmation = (string) $form->get('passwordConfirm')->getData();

            if ($plainPassword !== $passwordConfirmation) {
                $form->get('passwordConfirm')
                     ->addError(new FormError('Passwords do not match!'));

                return $this->render('security/register.html.twig', [
                    'form' => $form,
                    'bestUsers' => $bestUsers,
                ]);
            }

            $register($user, $plainPassword);

            $this->addFlash('success', 'Your account has been created! You can now log in!');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form,
            'bestUsers' => $bestUsers,
        ]);
    }
}
