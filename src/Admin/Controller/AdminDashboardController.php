<?php

declare(strict_types=1);

namespace App\Admin\Controller;

use App\Admin\Service\StatsService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AdminDashboardController extends AbstractController
{
    #[Route('/admin', name: 'admin_dashbord')]
    public function index(StatsService $statsService): Response
    {
        return $this->render('admin/dashbord/index.html.twig', [
            'stats' => $statsService->getStats(),
            'bestAds' => $statsService->getAdsStats('DESC'),
            'worstAds' => $statsService->getAdsStats('ASC'),
        ]);
    }
}