<?php

declare(strict_types=1);

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class FrenchToDateTimeTransformer implements DataTransformerInterface
{
    public function transform(mixed $date): mixed
    {
        if ($date === null) {
            return '';
        }

        return $date->format('d/m/Y');
    }

    public function reverseTransform(mixed $frenchDate): mixed
    {
        // frenchDate = 21/09/2018
        if ($frenchDate === null) {
            // Exception
            throw new transformationFailedException('Vous devez fournir une date');
        }

        $date = \DateTime::createFromFormat('d/m/Y', $frenchDate);

        if ($date === false) {
            // Exception
            throw new transformationFailedException("Le format de la date n'est pas le bon");
        }

        return $date;
    }
}
