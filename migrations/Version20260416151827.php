<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260416151827 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL, avatar VARCHAR(500) DEFAULT NULL, bio LONGTEXT DEFAULT NULL, is_host TINYINT(1) NOT NULL, is_verified TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, phone VARCHAR(20) DEFAULT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), UNIQUE INDEX UNIQ_8D93D649989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ad (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, price NUMERIC(10, 2) NOT NULL, introduction LONGTEXT NOT NULL, content LONGTEXT NOT NULL, cover_image VARCHAR(255) NOT NULL, rooms INT NOT NULL, max_guests INT NOT NULL, address VARCHAR(255) DEFAULT NULL, city VARCHAR(100) DEFAULT NULL, country VARCHAR(100) DEFAULT NULL, latitude DOUBLE PRECISION DEFAULT NULL, longitude DOUBLE PRECISION DEFAULT NULL, is_published TINYINT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, author_id INT NOT NULL, category_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_77E0ED58989D9B62 (slug), INDEX IDX_77E0ED58F675F31B (author_id), INDEX IDX_77E0ED5812469DE2 (category_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE ad_amenity (ad_id INT NOT NULL, amenity_id INT NOT NULL, INDEX IDX_662A90E74F34D596 (ad_id), INDEX IDX_662A90E79F9F1305 (amenity_id), PRIMARY KEY (ad_id, amenity_id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE amenity (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(100) NOT NULL, icon VARCHAR(100) DEFAULT NULL, group_name VARCHAR(100) DEFAULT NULL, UNIQUE INDEX UNIQ_AB607963989D9B62 (slug), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE booking (id INT AUTO_INCREMENT NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, created_at DATETIME NOT NULL, amount NUMERIC(10, 2) NOT NULL, comment LONGTEXT DEFAULT NULL, status VARCHAR(20) NOT NULL, guests_count INT NOT NULL, cancelled_at DATETIME DEFAULT NULL, cancellation_reason LONGTEXT DEFAULT NULL, booker_id INT NOT NULL, ad_id INT NOT NULL, INDEX IDX_E00CEDDE8B7E4006 (booker_id), INDEX IDX_E00CEDDE4F34D596 (ad_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(100) NOT NULL, description LONGTEXT DEFAULT NULL, icon VARCHAR(100) DEFAULT NULL, created_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_64C19C1989D9B62 (slug), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, rating INT NOT NULL, content LONGTEXT NOT NULL, ad_id INT NOT NULL, author_id INT NOT NULL, booking_id INT DEFAULT NULL, INDEX IDX_9474526C4F34D596 (ad_id), INDEX IDX_9474526CF675F31B (author_id), UNIQUE INDEX UNIQ_9474526C3301C60 (booking_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE favorite (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL, user_id INT NOT NULL, ad_id INT NOT NULL, INDEX IDX_68C58ED9A76ED395 (user_id), INDEX IDX_68C58ED94F34D596 (ad_id), UNIQUE INDEX uq_favorite_user_ad (user_id, ad_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, url VARCHAR(255) NOT NULL, caption VARCHAR(255) DEFAULT NULL, position SMALLINT NOT NULL, is_primary TINYINT NOT NULL, ad_id INT NOT NULL, INDEX IDX_C53D045F4F34D596 (ad_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE payment (id INT AUTO_INCREMENT NOT NULL, amount NUMERIC(10, 2) NOT NULL, currency VARCHAR(3) NOT NULL, status VARCHAR(20) NOT NULL, provider VARCHAR(50) NOT NULL, provider_payment_id VARCHAR(255) DEFAULT NULL, provider_charge_id VARCHAR(255) DEFAULT NULL, failure_reason LONGTEXT DEFAULT NULL, paid_at DATETIME DEFAULT NULL, refunded_at DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, booking_id INT NOT NULL, UNIQUE INDEX UNIQ_6D28840D2175EF03 (provider_payment_id), INDEX IDX_6D28840D3301C60 (booking_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE ad ADD CONSTRAINT FK_77E0ED58F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ad ADD CONSTRAINT FK_77E0ED5812469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE ad_amenity ADD CONSTRAINT FK_662A90E74F34D596 FOREIGN KEY (ad_id) REFERENCES ad (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ad_amenity ADD CONSTRAINT FK_662A90E79F9F1305 FOREIGN KEY (amenity_id) REFERENCES amenity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE8B7E4006 FOREIGN KEY (booker_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE4F34D596 FOREIGN KEY (ad_id) REFERENCES ad (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C4F34D596 FOREIGN KEY (ad_id) REFERENCES ad (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CF675F31B FOREIGN KEY (author_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C3301C60 FOREIGN KEY (booking_id) REFERENCES booking (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE favorite ADD CONSTRAINT FK_68C58ED9A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite ADD CONSTRAINT FK_68C58ED94F34D596 FOREIGN KEY (ad_id) REFERENCES ad (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F4F34D596 FOREIGN KEY (ad_id) REFERENCES ad (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE payment ADD CONSTRAINT FK_6D28840D3301C60 FOREIGN KEY (booking_id) REFERENCES booking (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ad DROP FOREIGN KEY FK_77E0ED58F675F31B');
        $this->addSql('ALTER TABLE ad DROP FOREIGN KEY FK_77E0ED5812469DE2');
        $this->addSql('ALTER TABLE ad_amenity DROP FOREIGN KEY FK_662A90E74F34D596');
        $this->addSql('ALTER TABLE ad_amenity DROP FOREIGN KEY FK_662A90E79F9F1305');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE8B7E4006');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE4F34D596');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C4F34D596');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CF675F31B');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C3301C60');
        $this->addSql('ALTER TABLE favorite DROP FOREIGN KEY FK_68C58ED9A76ED395');
        $this->addSql('ALTER TABLE favorite DROP FOREIGN KEY FK_68C58ED94F34D596');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F4F34D596');
        $this->addSql('ALTER TABLE payment DROP FOREIGN KEY FK_6D28840D3301C60');
        $this->addSql('DROP TABLE ad');
        $this->addSql('DROP TABLE ad_amenity');
        $this->addSql('DROP TABLE amenity');
        $this->addSql('DROP TABLE booking');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE favorite');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE payment');
        $this->addSql('DROP TABLE `user`');
    }
}
