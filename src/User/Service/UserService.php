<?php

declare(strict_types=1);

namespace App\User\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    public function __construct(
        private readonly EntityManagerInterface $manager,
        private readonly UserPasswordHasherInterface $hasher,
    ) {
    }

    public function register(User $user): void
    {
        $hash = $this->hasher->hashPassword($user, $user->getHash());
        $user->setHash($hash);

        $this->manager->persist($user);
        $this->manager->flush();
    }

    public function updateProfile(User $user): void
    {
        $this->manager->persist($user);
        $this->manager->flush();
    }

    public function updatePassword(User $user, string $newPassword): void
    {
        $hash = $this->hasher->hashPassword($user, $newPassword);
        $user->setHash($hash);

        $this->manager->persist($user);
        $this->manager->flush();
    }

    public function isCurrentPassword(User $user, string $password): bool
    {
        return password_verify($password, $user->getHash());
    }
}
