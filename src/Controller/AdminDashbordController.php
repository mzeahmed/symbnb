<?php

namespace App\Controller;

use App\Service\StatsService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminDashbordController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_dashbord")
     * @param StatsService $statsService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(StatsService $statsService)
    {
        $stats = $statsService->getStats();

        $bestAds = $statsService->getAdsStats('DESC');

        $worstAds = $statsService->getAdsStats('ASC');

        return $this->render('admin/dashbord/index.html.twig', [
            'stats' => $stats,
            'bestAds' => $bestAds,
            'worstAds' => $worstAds
        ]);
    }
}
