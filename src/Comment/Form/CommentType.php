<?php

declare(strict_types=1);

namespace App\Comment\Form;

use App\Entity\Comment;
use App\Shared\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class CommentType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('rating', IntegerType::class, $this->getConfiguration('Rating out of 5', 'Please enter your rating from 0 to 5', [
                'attr' => ['min' => 0, 'max' => 5, 'step' => 1],
            ]))
            ->add('content', TextareaType::class, $this->getConfiguration('Your review / testimonial', 'Feel free to be very detailed!'));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => Comment::class]);
    }
}
