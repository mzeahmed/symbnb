<?php

declare(strict_types=1);

namespace App\Booking\Form;

use App\Entity\Booking;
use App\Shared\Form\ApplicationType;
use App\Shared\Form\DataTransformer\FrenchToDateTimeTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookingType extends ApplicationType
{
    public function __construct(private readonly FrenchToDateTimeTransformer $transformer) {}

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('startDate', TextType::class, $this->getConfiguration("Date d'arrivée", 'La date à laquelle vous comptez arriver'))
            ->add('endDate', TextType::class, $this->getConfiguration('Date de départ', 'La date à laquelle vous quittez les lieux'))
            ->add('comment', TextareaType::class, $this->getConfiguration(false, "Si vous avez un commentaire, n'hésitez pas !", ['required' => false]));

        $builder->get('startDate')->addModelTransformer($this->transformer);
        $builder->get('endDate')->addModelTransformer($this->transformer);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
            'validation_groups' => ['Default', 'front'],
        ]);
    }
}