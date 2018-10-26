<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends Controller
{

    /**
     * @Route("/hello/{prenom}/age/{age}", name="hello")
     * @Route("/hello", name="hello_base")
     * $Route("/hello/{prenom}", name="hello_prenom")
     */
    public function hello($prenom = "ananyme", $age = "0")
    {
        return $this->render(
            'hello.html.twig',
            [
                'prenom' => $prenom,
                'age' => $age
            ]
        );
    }

    /**
     * @Route("/", name="homepage")
     */
    public function home()
    {
        $prenoms = ['Lior' => '10', 'Joseph' => '20', 'Anne' => '55'];

        return $this->render(
            'home.html.twig',
            [
                'title' => 'Bonjour à tous',
                'age' => 31,
                'tableau' => $prenoms,
            ]
        );
    }
}