<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class PasswordUpdater
{
    public function __construct(
        private readonly EntityManagerInterface $manager,
        private readonly UserPasswordHasherInterface $hasher,
    ) {
    }

    public function updatePassword(User $user, string $newPassword): void
    {
        $hash = $this->hasher->hashPassword($user, $newPassword);
        $user->setPassword($hash);

        $this->manager->persist($user);
        $this->manager->flush();
    }

    public function isCurrentPassword(User $user, string $password): bool
    {
        return password_verify($password, $user->getPassword());
    }
}
