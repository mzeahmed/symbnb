<?php

declare(strict_types=1);

namespace App\Booking\Enum;

enum BookingStatus: string
{
    case Pending = 'pending';
    case Confirmed = 'confirmed';
    case Cancelled = 'cancelled';
    case Completed = 'completed';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::Confirmed => 'Confirmed',
            self::Cancelled => 'Cancelled',
            self::Completed => 'Completed',
        };
    }

    public function isCancellable(): bool
    {
        return $this === self::Pending || $this === self::Confirmed;
    }

    /**
     * Validates allowed status transitions.
     *
     * Pending   → Confirmed, Cancelled
     * Confirmed → Completed, Cancelled
     * Completed → (terminal)
     * Cancelled → (terminal)
     */
    public function canTransitionTo(self $next): bool
    {
        return match ($this) {
            self::Pending => in_array($next, [self::Confirmed, self::Cancelled], true),
            self::Confirmed => in_array($next, [self::Completed, self::Cancelled], true),
            default => false,
        };
    }
}
