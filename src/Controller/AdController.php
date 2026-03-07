<?php

namespace App\Controller;

use App\Entity\Ad;
use App\Form\AdType;
use App\Repository\AdRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class AdController extends AbstractController
{
    #[Route('/ads', name: 'ads_index')]
    public function index(AdRepository $repo)
    {
        $ads = $repo->findAll();

        return $this->render('ad/index.html.twig', [
            'ads' => $ads
        ]);
    }

    #[Route('/ads/new', name: 'ads_create')]
    #[IsGranted('ROLE_USER')]
    public function create(Request $request, EntityManagerInterface $manager)
    {
        $ad = new Ad();

        $form = $this->createForm(AdType::class, $ad);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($ad->getImages() as $image){
                $image->setAd($ad);
                $manager->persist($image);
            }

            $ad->setAuthor($this->getUser());

            $manager->persist($ad);
            $manager->flush();

            $this->addFlash('success', "l'annonce <strong>{$ad->getTitle()}</strong> a bien été enregistrée !");

            return $this->redirectToRoute('ads_show', [
                'slug' => $ad->getSlug()
            ]);
        }

        return $this->render('ad/new.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/ads/{slug}/edit', name: 'ads_edit')]
    #[IsGranted('ROLE_USER')]
    public function edit(Ad $ad, Request $request, EntityManagerInterface $manager)
    {
        if ($this->getUser() !== $ad->getAuthor()) {
            throw $this->createAccessDeniedException("Cette annonce ne vous appartient pas, vous ne pouvez pas la modifier");
        }
        $form = $this->createForm(AdType::class, $ad);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($ad->getImages() as $image){
                $image->setAd($ad);
                $manager->persist($image);
            }

            $manager->persist($ad);
            $manager->flush();

            $this->addFlash('success', "les modifications de l'annonce <strong>{$ad->getTitle()}</strong> ont bien étés enregistrées !");

            return $this->redirectToRoute('ads_show', [
                'slug' => $ad->getSlug()
            ]);
        }

        return $this->render('ad/edit.html.twig', [
            'form' => $form->createView(),
            'ad' => $ad
        ]);
    }

    #[Route('/ads/{slug}', name: 'ads_show')]
    public function show(Ad $ad)
    {
        return $this->render('ad/show.html.twig', [
            'ad' => $ad
        ]);
    }

    #[Route('/ads/{slug}/delete', name: 'ads_delete')]
    #[IsGranted('ROLE_USER')]
    public function delete(Ad $ad, EntityManagerInterface $manager)
    {
        if ($this->getUser() !== $ad->getAuthor()) {
            throw $this->createAccessDeniedException("Vous n'avez pas le droit d'acceder à cette ressource");
        }
        $manager->remove($ad);
        $manager->flush();

        $this->addFlash('success', "L'annonce <strong>{$ad->getTitle()}</strong> a bien été supprimée");

        return $this->redirectToRoute("ads_index");
    }
}
