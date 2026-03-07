# SymBnB

Accommodation rental application built with Symfony

## Prerequisites

- Docker & Docker Compose
- Make

## Tech Stack

- **Backend**: Symfony 7.4 (PHP 8.3)
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **Web Server**: Nginx 1.25
- **Frontend**: Webpack Encore

## Installation

### 1. Clone the project

```bash
git clone <repository-url>
cd symbnb
```

### 2. Configure environment variables

```bash
cp .env .env.local
```

Edit `.env.local` according to your needs.

### 3. Start Docker containers

```bash
make up
```

### 4. Install dependencies

```bash
docker compose exec php composer install
npm install
```

### 5. Create the database

```bash
make db
make migrate
```

### 6. Load fixtures (optional)

```bash
docker compose exec php php bin/console doctrine:fixtures:load
```

### 7. Compile assets

```bash
npm run dev
```

## Useful Commands

### Docker

- `make up` - Start containers
- `make down` - Stop containers
- `make logs` - Show logs

### Database

- `make db` - Create database
- `make migrate` - Run migrations
- `make migration` - Create a new migration
- `make reset-db` - Reset database (drop, create, migrate, fixtures)
- `make db-shell` - Open PostgreSQL shell

### Development

- `make cache-clear` - Clear Symfony cache
- `make test` - Run PHPUnit tests

## Service Access

- **Application**: http://localhost:8080
- **Adminer**: http://localhost:8081
- **Redis**: localhost:6379

## Project Structure

```
.
├── .docker/          # Docker configuration
│   ├── nginx/        # Nginx configuration
│   └── php/          # PHP Dockerfile
├── assets/           # Frontend assets (JS, CSS)
├── config/           # Symfony configuration
├── migrations/       # Doctrine migrations
├── public/           # Web entry point
├── src/              # PHP source code
├── templates/        # Twig templates
├── tests/            # PHPUnit tests
├── compose.yaml      # Docker Compose configuration
└── makefile          # Make commands
```

## Development

### Create an entity

```bash
docker compose exec php php bin/console make:entity
```

### Create a controller

```bash
docker compose exec php php bin/console make:controller
```

### Create a form

```bash
docker compose exec php php bin/console make:form
```

## Tests

```bash
make test
```

## License

Proprietary
