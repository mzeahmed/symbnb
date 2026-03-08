<?php

declare(strict_types=1);

namespace App\Shared\Service;

use Twig\Environment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class PaginationService
{
    private string $entityClass;
    private int $limit = 10;
    private int $currentPage = 1;
    private string $route;

    public function __construct(
        private readonly EntityManagerInterface $manager,
        private readonly Environment $twig,
        RequestStack $request,
        private string $templatePath,
    ) {
        $this->route = $request->getCurrentRequest()->attributes->get('_route');
    }

    public function display(): void
    {
        $this->twig->display($this->templatePath, [
            'page' => $this->currentPage,
            'pages' => $this->getPages(),
            'route' => $this->route,
        ]);
    }

    public function getPages(): int
    {
        if (empty($this->entityClass)) {
            throw new \Exception('You have not specified the entity to paginate on! Use setEntityClass().');
        }

        $total = count($this->manager->getRepository($this->entityClass)->findAll());

        return (int) ceil($total / $this->limit);
    }

    public function getData(): array
    {
        if (empty($this->entityClass)) {
            throw new \Exception('You have not specified the entity to paginate on! Use setEntityClass().');
        }

        $offset = $this->currentPage * $this->limit - $this->limit;

        return $this->manager->getRepository($this->entityClass)->findBy([], [], $this->limit, $offset);
    }

    public function setEntityClass(string $entityClass): self
    {
        $this->entityClass = $entityClass;

        return $this;
    }

    public function getEntityClass(): string
    {
        return $this->entityClass;
    }

    public function setPage(int $page): self
    {
        $this->currentPage = $page;

        return $this;
    }

    public function getPage(): int
    {
        return $this->currentPage;
    }

    public function setLimit(int $limit): self
    {
        $this->limit = $limit;

        return $this;
    }

    public function getLimit(): int
    {
        return $this->limit;
    }

    public function setTemplatePath(string $templatePath): self
    {
        $this->templatePath = $templatePath;

        return $this;
    }

    public function getTemplatePath(): string
    {
        return $this->templatePath;
    }

    public function setRoute(string $route): self
    {
        $this->route = $route;

        return $this;
    }

    public function getRoute(): string
    {
        return $this->route;
    }
}
