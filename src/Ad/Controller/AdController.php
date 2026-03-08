<?php

declare(strict_types=1);

namespace App\Ad\Controller;

use App\Entity\Ad;
use App\Ad\Form\AdType;
use App\Ad\Service\AdService;
use App\Repository\AdRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdController extends AbstractController
{
    public function __construct(private readonly AdService $adService)
    {
    }

    #[Route('/ads', name: 'ads_index')]
    public function index(AdRepository $repo): Response
    {
        return $this->render('ad/index.html.twig', [
            'ads' => $repo->findAll(),
        ]);
    }

    #[Route('/ads/new', name: 'ads_create')]
    #[IsGranted('ROLE_USER')]
    public function create(Request $request): Response
    {
        $ad = new Ad();
        $form = $this->createForm(AdType::class, $ad);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->adService->save($ad, $this->getUser());

            $this->addFlash('success', "The listing <strong>{$ad->getTitle()}</strong> has been saved successfully!");

            return $this->redirectToRoute('ads_show', ['slug' => $ad->getSlug()]);
        }

        return $this->render('ad/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/ads/{slug}/edit', name: 'ads_edit')]
    #[IsGranted('ROLE_USER')]
    public function edit(Ad $ad, Request $request): Response
    {
        if ($this->getUser() !== $ad->getAuthor()) {
            throw $this->createAccessDeniedException('This listing does not belong to you.');
        }

        $form = $this->createForm(AdType::class, $ad);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->adService->save($ad);

            $this->addFlash('success', "The changes to the listing <strong>{$ad->getTitle()}</strong> have been saved successfully!");

            return $this->redirectToRoute('ads_show', ['slug' => $ad->getSlug()]);
        }

        return $this->render('ad/edit.html.twig', [
            'form' => $form->createView(),
            'ad' => $ad,
        ]);
    }

    #[Route('/ads/{slug}', name: 'ads_show')]
    public function show(Ad $ad): Response
    {
        return $this->render('ad/show.html.twig', ['ad' => $ad]);
    }

    #[Route('/ads/{slug}/delete', name: 'ads_delete')]
    #[IsGranted('ROLE_USER')]
    public function delete(Ad $ad): Response
    {
        if ($this->getUser() !== $ad->getAuthor()) {
            throw $this->createAccessDeniedException('You do not have permission to access this resource.');
        }

        $this->adService->delete($ad);

        $this->addFlash('success', "The listing <strong>{$ad->getTitle()}</strong> has been deleted successfully.");

        return $this->redirectToRoute('ads_index');
    }
}
