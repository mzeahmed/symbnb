<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Ad;
use Faker\Factory;
use App\Entity\Role;
use App\Entity\User;
use App\Entity\Image;
use App\Entity\Amenity;
use App\Entity\Booking;
use App\Entity\Comment;
use App\Entity\Category;
use App\Entity\Favorite;
use App\Booking\Enum\BookingStatus;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(private readonly UserPasswordHasherInterface $hasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('en_US');

        // ── Roles ─────────────────────────────────────────────────────────────
        $adminRole = new Role();
        $adminRole->setTitle('ROLE_ADMIN');
        $manager->persist($adminRole);

        // ── Admin user ────────────────────────────────────────────────────────
        $adminUser = new User();
        $adminUser
            ->setFirstName('Admin')
            ->setLastName('User')
            ->setEmail('adminuser@symbnb.net')
            ->setHash($this->hasher->hashPassword($adminUser, 'password'))
            ->setPicture($this->getGravatar('adminuser@symbnb.net'))
            ->setIntroduction($faker->sentence())
            ->setDescription('<p>' . implode('</p><p>', $faker->paragraphs(3)) . '</p>')
            ->setIsHost(true)
            ->setIsVerified(true)
            ->addUserRole($adminRole);
        $manager->persist($adminUser);

        // ── Categories ────────────────────────────────────────────────────────
        $categoryData = [
            ['Apartment', 'fa-building', 'Urban flats and city apartments'],
            ['House', 'fa-home', 'Entire houses for comfortable stays'],
            ['Villa', 'fa-umbrella-beach', 'Luxury villas with private pools'],
            ['Studio', 'fa-door-open', 'Compact studios for solo travelers'],
            ['Cabin', 'fa-tree', 'Cozy cabins in nature'],
            ['Loft', 'fa-layer-group', 'Open-plan loft spaces'],
        ];

        $categories = [];
        foreach ($categoryData as [$name, $icon, $desc]) {
            $category = new Category();
            $category->setName($name)->setIcon($icon)->setDescription($desc);
            $manager->persist($category);
            $categories[] = $category;
        }

        // ── Amenities ─────────────────────────────────────────────────────────
        $amenityData = [
            // [name, icon, group]
            ['WiFi', 'wifi', 'Essentials'],
            ['Air conditioning', 'snowflake', 'Essentials'],
            ['Heating', 'fire', 'Essentials'],
            ['Washing machine', 'tshirt', 'Essentials'],
            ['Kitchen', 'utensils', 'Comfort'],
            ['Dishwasher', 'soap', 'Comfort'],
            ['TV', 'tv', 'Comfort'],
            ['Workspace', 'laptop', 'Comfort'],
            ['Private parking', 'car', 'Outdoor'],
            ['Garden', 'seedling', 'Outdoor'],
            ['BBQ', 'fire-alt', 'Outdoor'],
            ['Pool', 'swimming-pool', 'Outdoor'],
            ['Smoke detector', 'bell', 'Safety'],
            ['First aid kit', 'first-aid', 'Safety'],
            ['Fire extinguisher', 'extinguisher', 'Safety'],
        ];

        $amenities = [];
        foreach ($amenityData as [$name, $icon, $group]) {
            $amenity = new Amenity();
            $amenity->setName($name)->setIcon($icon)->setGroupName($group);
            $manager->persist($amenity);
            $amenities[] = $amenity;
        }

        // ── Regular users ─────────────────────────────────────────────────────
        $users = [];
        $genders = ['male', 'female'];

        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $gender = $faker->randomElement($genders);
            $num = $faker->numberBetween(1, 99);
            $picture = sprintf(
                'https://randomuser.me/api/portraits/%s/%d.jpg',
                $gender === 'male' ? 'men' : 'women',
                $num
            );

            $user
                ->setFirstName($faker->firstName($gender))
                ->setLastName($faker->lastName())
                ->setEmail($faker->unique()->safeEmail())
                ->setHash($this->hasher->hashPassword($user, 'password'))
                ->setPicture($picture)
                ->setIntroduction($faker->sentence())
                ->setDescription('<p>' . implode('</p><p>', $faker->paragraphs(3)) . '</p>')
                ->setPhone($faker->optional(0.6)->phoneNumber())
                ->setIsHost($faker->boolean(40))
                ->setIsVerified($faker->boolean(80));

            $manager->persist($user);
            $users[] = $user;
        }

        $allUsers = array_merge([$adminUser], $users);

        // ── Listings (Ads) ────────────────────────────────────────────────────
        $cities = ['Paris', 'Lyon', 'Marseille', 'Nice', 'Bordeaux', 'Toulouse', 'Nantes', 'Strasbourg'];

        $ads = [];
        for ($i = 0; $i < 30; $i++) {
            $ad = new Ad();
            $author = $faker->randomElement($allUsers);
            $city = $faker->randomElement($cities);

            $ad
                ->setTitle($faker->unique()->sentence(4))
                ->setCoverImage($faker->imageUrl(1000, 350, 'nature'))
                ->setIntroduction($faker->paragraph(2))
                ->setContent('<p>' . implode('</p><p>', $faker->paragraphs(5)) . '</p>')
                ->setPrice((string) $faker->numberBetween(40, 300))
                ->setRooms($faker->numberBetween(1, 6))
                ->setMaxGuests($faker->numberBetween(1, 10))
                ->setAuthor($author)
                ->setCategory($faker->randomElement($categories))
                ->setCity($city)
                ->setCountry('France')
                ->setAddress($faker->streetAddress())
                ->setLatitude($faker->latitude(43.0, 49.0))
                ->setLongitude($faker->longitude(-2.0, 7.5))
                ->setIsPublished($faker->boolean(85));

            // Attach 3–6 random amenities
            $shuffled = $amenities;
            shuffle($shuffled);
            foreach (array_slice($shuffled, 0, $faker->numberBetween(3, 6)) as $amenity) {
                $ad->addAmenity($amenity);
            }

            // Gallery images
            for ($j = 0; $j < $faker->numberBetween(2, 5); $j++) {
                $image = new Image();
                $image
                    ->setUrl($faker->imageUrl(800, 600, 'architecture'))
                    ->setCaption($faker->sentence())
                    ->setPosition($j)
                    ->setIsPrimary($j === 0)
                    ->setAd($ad);
                $manager->persist($image);
            }

            $manager->persist($ad);
            $ads[] = $ad;
        }

        // ── Bookings + Reviews ────────────────────────────────────────────────
        $statuses = [
            BookingStatus::Confirmed,
            BookingStatus::Confirmed,
            BookingStatus::Completed,
            BookingStatus::Completed,
            BookingStatus::Cancelled,
            BookingStatus::Pending,
        ];

        foreach ($ads as $ad) {
            $bookingCount = $faker->numberBetween(0, 8);

            for ($j = 0; $j < $bookingCount; $j++) {
                $booker = $faker->randomElement($allUsers);
                $status = $faker->randomElement($statuses);
                $duration = $faker->numberBetween(2, 14);
                $startDate = $faker->dateTimeBetween('-4 months', '+2 months');
                $endDate = (clone $startDate)->modify("+{$duration} days");
                $amount = (float) $ad->getPrice() * $duration;

                $booking = new Booking();
                $booking
                    ->setBooker($booker)
                    ->setAd($ad)
                    ->setStartDate($startDate)
                    ->setEndDate($endDate)
                    ->setAmount((string) $amount)
                    ->setGuestsCount($faker->numberBetween(1, $ad->getMaxGuests()))
                    ->setStatus($status)
                    ->setComment($faker->optional(0.4)->sentence());

                if ($status === BookingStatus::Cancelled) {
                    $booking->cancel($faker->optional(0.7)->sentence() ?? '');
                }

                $manager->persist($booking);

                // One review per completed booking (50% chance)
                if ($status === BookingStatus::Completed && $faker->boolean(50)) {
                    $review = new Comment();
                    $review
                        ->setContent($faker->paragraph())
                        ->setRating($faker->numberBetween(1, 5))
                        ->setAuthor($booker)
                        ->setAd($ad)
                        ->setBooking($booking);

                    $manager->persist($review);
                }
            }
        }

        // ── Favorites ─────────────────────────────────────────────────────────
        foreach ($users as $user) {
            $favoriteCount = $faker->numberBetween(0, 5);
            $shuffledAds = $ads;
            shuffle($shuffledAds);

            foreach (array_slice($shuffledAds, 0, $favoriteCount) as $ad) {
                $favorite = new Favorite();
                $favorite->setUser($user)->setAd($ad);
                $manager->persist($favorite);
            }
        }

        $manager->flush();
    }

    /**
     * Returns a Gravatar URL for the given email address.
     */
    private function getGravatar(string $email): string
    {
        return 'https://www.gravatar.com/avatar/' . md5(strtolower(trim($email))) . '?s=80&d=mp&r=g';
    }
}
