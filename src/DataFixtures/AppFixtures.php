<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Ad;
use Faker\Factory;
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
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class AppFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $users = $this->getUsers();

        $categories = $this->createCategories($manager);
        $amenities = $this->createAmenities($manager);
        $ads = $this->createAds($manager, $faker, $users, $categories, $amenities);
        $this->createBookingsAndReviews($manager, $faker, $users, $ads);
        $this->createFavorites($manager, $faker, array_slice($users, 1), $ads);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [UserFixtures::class];
    }

    /**
     * @return list<Category>
     */
    private function createCategories(ObjectManager $manager): array
    {
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

        return $categories;
    }

    /**
     * @return list<Amenity>
     */
    private function createAmenities(ObjectManager $manager): array
    {
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
            $amenity->setName($name)
                    ->setIcon($icon)
                    ->setGroupName($group);
            $manager->persist($amenity);
            $amenities[] = $amenity;
        }

        return $amenities;
    }

    /**
     * @param list<User> $users
     * @param list<Category> $categories
     * @param list<Amenity> $amenities
     *
     * @return list<Ad>
     */
    private function createAds(ObjectManager $manager, \Faker\Generator $faker, array $users, array $categories, array $amenities): array
    {
        $cities = [
            'Paris',
            'Lyon',
            'Marseille',
            'Nice',
            'Bordeaux',
            'Toulouse',
            'Nantes',
            'Strasbourg',
            'New York',
            'Moroni',
            'Rio',
        ];

        $ads = [];
        for ($i = 0; $i < 30; $i++) {
            $ad = new Ad();
            $author = $faker->randomElement($users);
            $city = $faker->randomElement($cities);

            $ad
                ->setTitle($faker->unique()->sentence(4))
                ->setCoverImage(sprintf('https://picsum.photos/1000/350?random=%d', $faker->numberBetween(1, 10000)))
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
                    ->setUrl(sprintf('https://picsum.photos/800/600?random=%d', $faker->numberBetween(1, 10000)))
                    ->setCaption($faker->sentence())
                    ->setPosition($j)
                    ->setIsPrimary($j === 0)
                    ->setAd($ad);
                $manager->persist($image);
            }

            $manager->persist($ad);
            $ads[] = $ad;
        }

        return $ads;
    }

    /**
     * @param list<User> $users
     * @param list<Ad> $ads
     */
    private function createBookingsAndReviews(ObjectManager $manager, \Faker\Generator $faker, array $users, array $ads): void
    {
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
                $eligibleBookers = array_values(array_filter(
                    $users,
                    static fn(User $user): bool => $user !== $ad->getAuthor()
                ));

                if ($eligibleBookers === []) {
                    continue;
                }

                $booker = $faker->randomElement($eligibleBookers);
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
    }

    /**
     * @param list<User> $users
     * @param list<Ad> $ads
     */
    private function createFavorites(ObjectManager $manager, \Faker\Generator $faker, array $users, array $ads): void
    {
        foreach ($users as $user) {
            $favoriteCount = $faker->numberBetween(0, 5);
            $shuffledAds = array_values(array_filter(
                $ads,
                static fn(Ad $ad): bool => $ad->getAuthor() !== $user
            ));

            shuffle($shuffledAds);

            foreach (array_slice($shuffledAds, 0, $favoriteCount) as $ad) {
                $favorite = new Favorite();
                $favorite->setUser($user)->setAd($ad);
                $manager->persist($favorite);
            }
        }
    }

    /**
     * @return list<User>
     */
    private function getUsers(): array
    {
        $users = [$this->getReference(UserFixtures::ADMIN_REFERENCE, User::class)];

        for ($i = 0; $i < UserFixtures::REGULAR_USERS_COUNT; $i++) {
            $users[] = $this->getReference(UserFixtures::USER_REFERENCE_PREFIX . $i, User::class);
        }

        return $users;
    }
}
