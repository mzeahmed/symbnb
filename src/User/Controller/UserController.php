<?php

declare(strict_types=1);

namespace App\User\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    #[Route('/user/{slug}', name: 'user_show')]
    public function index(User $user): Response
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
}
