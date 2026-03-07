<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BookingRepository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Booking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'bookings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $booker = null;

    #[ORM\ManyToOne(targetEntity: Ad::class, inversedBy: 'bookings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Ad $ad = null;

    #[ORM\Column(type: 'datetime')]
    #[Assert\Date(message: 'Warning, the arrival date must be in the correct format!')]
    #[Assert\GreaterThan(value: 'today', message: 'The arrival date must be later than today', groups: ['front'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: 'datetime')]
    #[Assert\Date(message: 'Warning, the departure date must be in the correct format!')]
    #[Assert\GreaterThan(propertyPath: 'startDate', message: 'The departure date must be later than the arrival date')]
    private ?\DateTimeInterface $endDate = null;

    #[ORM\Column(type: 'datetime')]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: 'float')]
    private ?float $amount = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $comment = null;

    /**
     * Callback called each time a booking is created or modified
     *
     * @throws \Exception
     */
    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function prePersist()
    {
        if (empty($this->createdAt)) {
            $this->createdAt = new \DateTime();
        }

        if (empty($this->amount)) {
            // ad price * number of days
            $this->amount = $this->ad->getPrice() * $this->getDuration();
        }
    }

    /**
     * Check if a day is available for booking
     *
     * @return bool
     * @throws \Exception
     */
    public function isBookableDates(): bool
    {
        // 1) Get the unavailable dates for the ad
        $notAvailableDays = $this->ad->getNotAvailableDays();

        // 2) Compare the chosen dates with the unavailable dates
        $bookingDays = $this->getDays();

        $formatDay = (function ($day) {
            return $day->format('Y-m-d');
        });

        // Array of date strings for my booking days
        $days = array_map($formatDay, $bookingDays);
        $notAvailable = array_map($formatDay, $notAvailableDays);

        foreach ($days as $day) {
            if (array_search($day, $notAvailable) !== false) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get an array of days corresponding to the booking
     *
     * @return  \DateTime[] An array of DateTime objects representing the booking days
     * @throws \Exception
     */
    public function getDays(): array
    {
        $resultat = range(
            $this->startDate->getTimestamp(),
            $this->endDate->getTimestamp(),
            24 * 60 * 60
        );

        return array_map(function ($dayTimestamp) {
            return new \DateTime(date('Y-m-d', $dayTimestamp));
        }, $resultat);
    }

    /**
     * Calculate the number of days
     *
     * @return mixed
     */
    public function getDuration()
    {
        $diff = $this->endDate->diff($this->startDate);

        return $diff->days;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBooker(): ?User
    {
        return $this->booker;
    }

    public function setBooker(?User $booker): self
    {
        $this->booker = $booker;

        return $this;
    }

    public function getAd(): ?Ad
    {
        return $this->ad;
    }

    public function setAd(?Ad $ad): self
    {
        $this->ad = $ad;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }
}
