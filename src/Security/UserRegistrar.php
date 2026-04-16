<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\User;
use App\Repository\UserRepository;
use Cocur\Slugify\Slugify;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserRegistrar
{
    public function __construct(
        private readonly UserRepository $userRepository,
    ) {
    }

    public function register(
        User $user,
        FormInterface $form,
        UserPasswordHasherInterface $userPasswordHasher,
        string $passwordConfirmation,
        EntityManagerInterface $entityManager
    ): void {
        $email = $form->get('email')->getData();

        $firstName = $form->get('firstName')->getData();
        $lastName = $form->get('lastName')->getData();

        $phone = $form->get('phone')->getData();

        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setPhone($phone);
        $user->setEmail($email);
        $user->setPassword($userPasswordHasher->hashPassword($user, $passwordConfirmation));

        $baseSlug = (new Slugify())->slugify(trim(sprintf('%s %s', (string) $firstName, (string) $lastName)) ?: (string) explode('@', (string) $email)[0]);
        $user->setSlug($this->userRepository->getAvailableSlug($baseSlug));

        $entityManager->persist($user);
        $entityManager->flush();
    }
}
