<?php

namespace App\TwigHelpers;

use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    private RequestStack $requestStack;

    // private TranslatorInterface $translator;

    public function __construct(RequestStack $requestStack,)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('setActive', [$this, 'setActive']),
        ];
    }

    /**
     * Gere l'etat actif des liens
     *
     * @param $routes array
     *
     * @return string
     */
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