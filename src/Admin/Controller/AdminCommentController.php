<?php

declare(strict_types=1);

namespace App\Admin\Controller;

use App\Entity\Comment;
use App\Admin\Form\AdminCommentType;
use Doctrine\ORM\EntityManagerInterface;
use App\Shared\Service\PaginationService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminCommentController extends AbstractController
{
    #[Route('/admin/comments/{page<\d+>?1}', name: 'admin_comment_index')]
    public function index(int $page, PaginationService $pagination): Response
    {
        $pagination->setEntityClass(Comment::class)->setLimit(5)->setPage($page);

        return $this->render('admin/comment/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/admin/comments/{id}/edit', name: 'admin_comment_edit')]
    public function edit(Comment $comment, Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(AdminCommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', "Comment #{$comment->getId()} has been updated successfully!");
        }

        return $this->render('admin/comment/edit.html.twig', [
            'comment' => $comment,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/admin/comments/{id}/delete', name: 'admin_comment_delete')]
    public function delete(Comment $comment, EntityManagerInterface $manager): Response
    {
        $manager->remove($comment);
        $manager->flush();

        $this->addFlash('success', "The comment by {$comment->getAuthor()->getFullName()} has been deleted successfully.");

        return $this->redirectToRoute('admin_comment_index');
    }
}
