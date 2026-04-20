<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Faker\Factory;
use Faker\Generator;
use App\Entity\User;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public const ADMIN_REFERENCE = 'user_admin';
    public const USER_REFERENCE_PREFIX = 'user_';
    public const REGULAR_USERS_COUNT = 60;

    public function __construct(
        private readonly UserPasswordHasherInterface $hasher
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $slugify = new Slugify();

        $this->adminUser($manager, $faker);
        $this->users($manager, $faker, $slugify);

        $manager->flush();
    }

    private function users(ObjectManager $manager, Generator $faker, Slugify $slugify): void
    {
        $genders = ['male', 'female'];

        for ($i = 0; $i < self::REGULAR_USERS_COUNT; $i++) {
            $user = new User();
            $gender = $faker->randomElement($genders);
            $num = $faker->numberBetween(1, 99);
            $firstName = $faker->firstName($gender);
            $lastName = $faker->lastName();
            $email = $faker->unique()->safeEmail();
            $picture = $this->buildAvatarUrl($gender === 'male' ? 'men' : 'women', $num);

            $user
                ->setFirstName($firstName)
                ->setLastName($lastName)
                ->setEmail($email)
                ->setSlug($slugify->slugify(sprintf('%s %s %d', $firstName, $lastName, $i + 1)))
                ->setPassword($this->hasher->hashPassword($user, '!ChangeMe!'))
                ->setAvatar($picture)
                ->setBio(implode("\n\n", $faker->paragraphs(3)))
                ->setPhone($faker->optional(0.6)->passthrough($this->generatePhoneNumber($faker)))
                ->setIsHost($faker->boolean(40))
                ->setIsVerified($faker->boolean(80));

            $manager->persist($user);
            $this->addReference(self::USER_REFERENCE_PREFIX . $i, $user);
        }
    }

    private function adminUser(ObjectManager $manager, Generator $faker): void
    {
        $adminUser = new User();
        $adminUser
            ->setFirstName('Admin')
            ->setLastName('User')
            ->setEmail('adminuser@symbnb.net')
            ->setSlug('admin-user')
            ->setPassword($this->hasher->hashPassword($adminUser, '!ChangeMe!'))
            ->setAvatar($this->buildAvatarUrl('m', 1))
            ->setBio(implode("\n\n", $faker->paragraphs(3)))
            ->setRoles(['ROLE_ADMIN'])
            ->setIsHost(true)
            ->setIsVerified(true)
            ->setPhone('+33 6 00 00 00 00');

        $manager->persist($adminUser);
        $this->addReference(self::ADMIN_REFERENCE, $adminUser);
    }

    private function buildAvatarUrl(string $gender, int $num): string
    {
        return sprintf(
            'https://randomuser.me/api/portraits/%s/%d.jpg',
            $gender,
            $num
        );
    }

    private function generatePhoneNumber(Generator $faker): string
    {
        return sprintf(
            '+33 6 %02d %02d %02d %02d',
            $faker->numberBetween(10, 99),
            $faker->numberBetween(10, 99),
            $faker->numberBetween(10, 99),
            $faker->numberBetween(10, 99),
        );
    }
}
