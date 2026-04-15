<?php

declare(strict_types=1);

namespace App\Payment\Enum;

enum PaymentStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Failed = 'failed';
    case Refunded = 'refunded';
    case Expired = 'expired';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::Paid => 'Paid',
            self::Failed => 'Failed',
            self::Refunded => 'Refunded',
            self::Expired => 'Expired',
        };
    }

    /**
     * Terminal states cannot transition to anything else.
     */
    public function isFinal(): bool
    {
        return match ($this) {
            self::Paid, self::Refunded, self::Expired => true,
            default => false,
        };
    }

    /**
     * Validates allowed transitions in the payment lifecycle.
     *
     * Pending  → Paid, Failed, Expired
     * Paid     → Refunded
     * Failed   → (terminal)
     * Expired  → (terminal)
     * Refunded → (terminal)
     */
    public function canTransitionTo(self $next): bool
    {
        return match ($this) {
            self::Pending => in_array($next, [self::Paid, self::Failed, self::Expired], true),
            self::Paid => $next === self::Refunded,
            default => false,
        };
    }
}
