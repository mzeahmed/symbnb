<?php

declare(strict_types=1);

namespace App\User\Form;

use App\Entity\User;
use App\Shared\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class RegistrationType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, $this->getConfiguration('First name', 'Your first name ...'))
            ->add('lastName', TextType::class, $this->getConfiguration('Last name', 'Your last name ...'))
            ->add('email', EmailType::class, $this->getConfiguration('Email', 'Your email address'))
            ->add('picture', UrlType::class, $this->getConfiguration('Profile picture', 'URL of your avatar ...'))
            ->add('hash', PasswordType::class, $this->getConfiguration('Password', 'Choose a strong password ...'))
            ->add('passwordConfirm', PasswordType::class, $this->getConfiguration('Confirm password', 'Please confirm your password ...'))
            ->add('introduction', TextType::class, $this->getConfiguration('Introduction', 'Introduce yourself in a few words ...'))
            ->add('description', TextareaType::class, $this->getConfiguration('Detailed description', 'Now is the time to introduce yourself in detail ...'));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => User::class]);
    }
}
