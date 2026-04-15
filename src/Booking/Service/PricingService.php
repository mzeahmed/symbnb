<?php

declare(strict_types=1);

namespace App\Booking\Service;

use App\Entity\Ad;

/**
 * Calculates the total booking amount from an Ad's nightly rate.
 *
 * Extracted from Booking::prePersist() to keep the entity free of business logic
 * and to allow future extension (seasonal pricing, weekend surcharges, etc.).
 */
final class PricingService
{
    /**
     * Returns the total amount as a string with 2 decimal places (NUMERIC-safe).
     *
     * @throws \InvalidArgumentException if the date range is invalid
     */
    public function calculateAmount(
        Ad $ad,
        \DateTimeInterface $startDate,
        \DateTimeInterface $endDate,
    ): string {
        $nights = (int) $endDate->diff($startDate)->days;

        if ($nights <= 0) {
            throw new \InvalidArgumentException(
                'End date must be strictly after start date.'
            );
        }

        $amount = $ad->getPriceAsFloat() * $nights;

        // TODO phase 2: apply PricingRule overrides for specific date ranges
        // $amount = $this->applyPricingRules($ad, $startDate, $endDate, $amount);

        return number_format($amount, 2, '.', '');
    }
}
