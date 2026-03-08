<?php

declare(strict_types=1);

namespace App\Ad\Form;

use App\Entity\Ad;
use App\Shared\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class AdType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, $this->getConfiguration('Title', 'Enter a great title for your listing!'))
            ->add('slug', TextType::class, $this->getConfiguration('Web address', 'Enter the web address (automatic)', ['required' => false]))
            ->add('coverImage', UrlType::class, $this->getConfiguration('Main image URL', 'Provide the URL of an appealing image'))
            ->add('introduction', TextType::class, $this->getConfiguration('Introduction', 'Give a general description of the listing'))
            ->add('content', TextareaType::class, $this->getConfiguration('Detailed description', 'Write a description that makes people want to visit you'))
            ->add('rooms', IntegerType::class, $this->getConfiguration('Number of rooms', 'The number of available rooms'))
            ->add('price', MoneyType::class, $this->getConfiguration('Price per night', 'Enter the price for one night'))
            ->add('images', CollectionType::class, [
                'entry_type' => ImageType::class,
                'allow_add' => true,
                'allow_delete' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => Ad::class]);
    }
}
