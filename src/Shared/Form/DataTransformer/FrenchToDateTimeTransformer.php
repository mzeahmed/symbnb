<?php

declare(strict_types=1);

namespace App\Shared\Form\DataTransformer;

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
        if ($frenchDate === null) {
            throw new TransformationFailedException('Vous devez fournir une date');
        }

        $date = \DateTime::createFromFormat('d/m/Y', $frenchDate);

        if ($date === false) {
            throw new TransformationFailedException("Le format de la date n'est pas le bon");
        }

        return $date;
    }
}
