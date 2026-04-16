<?php

declare(strict_types=1);

namespace App\User\Form;

use App\Entity\User;
use App\Shared\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class RegistrationType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, $this->getConfiguration('First name', 'Your first name ...'))
            ->add('lastName', TextType::class, $this->getConfiguration('Last name', 'Your last name ...'))
            ->add('email', EmailType::class, $this->getConfiguration('Email', 'Your email address'))
            ->add('phone', TextType::class, $this->getConfiguration('Phone', 'Your phone number ...'))
            ->add('password', PasswordType::class, $this->getConfiguration('Password', 'Choose a strong password ...'))
            ->add('passwordConfirm', PasswordType::class, $this->getConfiguration('Confirm password', 'Please confirm your password ...'));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => User::class]);
    }
}
