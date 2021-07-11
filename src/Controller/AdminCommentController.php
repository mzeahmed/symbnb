<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Form\AdminCommentType;
use App\Repository\CommentRepository;
use App\Service\PaginationService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


class AdminCommentController extends AbstractController
{
    /**
     * @Route("/admin/comments/{page<\d+>?1}", name="admin_comment_index")
     *
     * @param CommentRepository $repo
     * @param                   $page
     * @param PaginationService $pagination
     *
     * @return Response
     */
    public function index(CommentRepository $repo, $page, PaginationService $pagination): Response
    {
        $pagination->setEntityClass(Comment::class);
        $pagination->setLimit(5);
        $pagination->setPage($page);

        return $this->render('admin/comment/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    /**
     * Permet de modifier un commentaire
     *
     * @Route("/admin/comments/{id}/edit", name="admin_comment_edit")
     *
     * @param Comment                $comment
     * @param Request                $request
     * @param EntityManagerInterface $manager
     *
     * @return Response
     */
    public function edit(Comment $comment, Request $request, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(AdminCommentType::class, $comment);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', "Le commentaire n° {$comment->getId()} a bien été modifié !");
        }

        return $this->render('admin/comment/edit.html.twig', [
            'comment' => $comment,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Permet de supprimmer un commentaire
     *
     * @Route("/admin/comments/{id}/delete", name="admin_comment_delete")
     *
     * @param Comment                $comment
     * @param EntityManagerInterface $manager
     *
     * @return Response
     */
    public function delete(Comment $comment, EntityManagerInterface $manager): Response
    {
        $manager->remove($comment);
        $manager->flush();

        $this->addFlash('success', "Le commentaire de {$comment->getAuthor()->getFullName()} a bien été supprimé");

        return $this->redirectToRoute('admin_comment_index');
    }
}
