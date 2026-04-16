<?php

declare(strict_types=1);

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[ORM\HasLifecycleCallbacks]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string>
     */
    #[ORM\Column(type: 'json')]
    private array $roles = [];

    /**
     * @var string|null The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    /** Not persisted – used only for form validation */
    private ?string $passwordConfirm = null;

    #[ORM\Column(length: 255, unique: true, nullable: true)]
    private ?string $slug = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 100)]
    private ?string $firstName = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 100)]
    private ?string $lastName = null;

    #[ORM\Column(length: 500, nullable: true)]
    #[Assert\Url]
    private ?string $avatar = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    #[ORM\Column]
    private bool $isHost = false;

    #[ORM\Column]
    private bool $isVerified = false;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    // ── Relations ─────────────────────────────────────────────────────────────

    #[ORM\OneToMany(targetEntity: Ad::class, mappedBy: 'author')]
    private Collection $ads;

    #[ORM\OneToMany(targetEntity: Booking::class, mappedBy: 'booker')]
    private Collection $bookings;

    #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'author')]
    private Collection $comments;

    #[ORM\OneToMany(targetEntity: Favorite::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $favorites;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $phone = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->ads = new ArrayCollection();
        $this->bookings = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->favorites = new ArrayCollection();
    }

    #[ORM\PrePersist]
    public function initializeSlug(): void
    {
        if (!empty($this->slug)) {
            return;
        }

        $base = ($this->firstName && $this->lastName)
            ? $this->firstName . ' ' . $this->lastName
            : explode('@', (string) $this->email)[0];

        $this->slug = (new Slugify())->slugify($base);
    }

    // ── Domain helpers ────────────────────────────────────────────────────────

    public function getFullName(): string
    {
        return trim(($this->firstName ?? '') . ' ' . ($this->lastName ?? ''));
    }

    public function hasFavorited(Ad $ad): bool
    {
        foreach ($this->favorites as $favorite) {
            if ($favorite->getAd() === $ad) {
                return true;
            }
        }

        return false;
    }

    // ── UserInterface ─────────────────────────────────────────────────────────

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getPasswordConfirm(): ?string
    {
        return $this->passwordConfirm;
    }

    public function setPasswordConfirm(?string $passwordConfirm): static
    {
        $this->passwordConfirm = $passwordConfirm;

        return $this;
    }

    /**
     * Ensure the session doesn't contain actual password hashes by CRC32C-hashing them.
     */
    public function __serialize(): array
    {
        $data = (array) $this;
        $data["\0" . self::class . "\0password"] = hash('crc32c', $this->password);

        return $data;
    }

    #[\Deprecated]
    public function eraseCredentials(): void
    {
        // @deprecated, to be removed when upgrading to Symfony 8
    }

    // ── Getters / Setters ─────────────────────────────────────────────────────

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): static
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): static
    {
        $this->bio = $bio;

        return $this;
    }

    public function isHost(): bool
    {
        return $this->isHost;
    }

    public function setIsHost(bool $isHost): static
    {
        $this->isHost = $isHost;

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): static
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getAds(): Collection
    {
        return $this->ads;
    }

    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }
}
