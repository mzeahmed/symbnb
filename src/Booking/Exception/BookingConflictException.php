<?php

declare(strict_types=1);

namespace App\Booking\Exception;

/**
 * Thrown when a booking attempt overlaps with an existing active booking.
 */
final class BookingConflictException extends \RuntimeException
{
}
