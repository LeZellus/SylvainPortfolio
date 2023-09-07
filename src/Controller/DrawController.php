<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DrawController extends AbstractController
{
    #[Route('/mes-projets', name: 'app_draw')]
    public function index(): Response
    {
        return $this->render('draw/index.html.twig', [
            'controller_name' => 'DrawController',
        ]);
    }
}
