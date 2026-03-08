<?php

declare(strict_types=1);

namespace App\Booking\Form;

use App\Entity\Booking;
use App\Shared\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Shared\Form\DataTransformer\FrenchToDateTimeTransformer;

class BookingType extends ApplicationType
{
    public function __construct(private readonly FrenchToDateTimeTransformer $transformer)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('startDate', TextType::class, $this->getConfiguration('Arrival date', 'The date on which you plan to arrive'))
            ->add('endDate', TextType::class, $this->getConfiguration('Departure date', 'The date on which you will leave'))
            ->add('comment', TextareaType::class, $this->getConfiguration(false, 'If you have a comment, feel free to share it!', ['required' => false]));

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
