<?php

declare(strict_types=1);

namespace App\Shared\Twig;

use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function __construct(private readonly RequestStack $requestStack) {}

    public function getFunctions(): array
    {
        return [
            new TwigFunction('setActive', [$this, 'setActive']),
        ];
    }

    public function setActive(array $routes): string
    {
        $currentRoute = $this->requestStack->getCurrentRequest()->get('_route');

        foreach ($routes as $route) {
            if ($route === $currentRoute) {
                return 'active';
            }
        }

        return '';
    }
}