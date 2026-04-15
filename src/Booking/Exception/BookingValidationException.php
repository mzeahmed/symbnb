<?php

declare(strict_types=1);

namespace App\Booking\Exception;

/**
 * Thrown when a booking request fails business rule validation
 * (invalid dates, guest count exceeded, host self-booking, etc.).
 */
final class BookingValidationException extends \RuntimeException
{
}
