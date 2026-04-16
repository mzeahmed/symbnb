<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\User;
use Cocur\Slugify\Slugify;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class RegisterUser
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly UserPasswordHasherInterface $hasher,
        private EntityManagerInterface $entityManager
    ) {
    }

    public function __invoke(User $user, string $plainPassword): User
    {
        $user->setPassword($this->hasher->hashPassword($user, $plainPassword));

        $baseSlug = $this->createBaseSlug($user);
        $user->setSlug($this->userRepository->getAvailableSlug($baseSlug));

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }

    private function createBaseSlug(User $user): string
    {
        $fullName = trim(sprintf(
            '%s %s',
            (string) $user->getFirstName(),
            (string) $user->getLastName()
        ));

        $source = '' !== $fullName
            ? $fullName
            : explode('@', (string) $user->getEmail())[0];

        return (new Slugify())->slugify($source);
    }
}
