<?php

declare(strict_types=1);

namespace App\Shared\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;
use Symfony\Component\HttpFoundation\RequestStack;

class AppExtension extends AbstractExtension
{
    public function __construct(private readonly RequestStack $requestStack)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('setActive', [$this, 'setActive']),
        ];
    }

    public function setActive(array $routes): string
    {
        $currentRoute = $this->requestStack->getCurrentRequest()->get('_route');

        if (in_array($currentRoute, $routes, true)) {
            return 'active';
        }

        return '';
    }
}
