RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[0;33m
BLUE=\033[0;34m
NO_COLOR=\033[0m

DOCKER = docker compose
PHP = $(DOCKER) exec php
CONSOLE = $(PHP) php bin/console
COMPOSER = $(DOCKER) exec php composer

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up: ## Start the containers
	$(DOCKER) up -d --build
	@echo ""
	@echo "$(GREEN)✔ Containers started successfully$(NO_COLOR)"
	@echo ""
	@echo "$(BLUE)Application URL :$(NO_COLOR) $(YELLOW)http://localhost:8080$(NO_COLOR)"
	@echo "$(BLUE)Adminer URL :$(NO_COLOR) $(YELLOW)http://localhost:8081$(NO_COLOR)"
	@echo ""

down: ## Stop the containers
	$(DOCKER) down

logs: ## Show the logs
	$(DOCKER) logs -f

db: ## Create the database
	$(PHP) bin/console doctrine:database:create

migrate: ## Migrate the database
	$(PHP) bin/console doctrine:migrations:migrate

migration: ## Create a migration
	$(PHP) bin/console make:migration

cache-clear: ## Clear the cache
	$(PHP) bin/console cache:clear

test: ## Run tests
	$(PHP) bin/phpunit

fixtures: ## Load fixtures
	$(PHP) bin/console doctrine:fixtures:load --no-interaction

db-shell: ## Open a database shell
	$(DOCKER) exec database psql -U app -d app

reset-db: ## Reset the database
	$(PHP) bin/console doctrine:database:drop --force
	$(PHP) bin/console doctrine:database:create
	$(PHP) bin/console doctrine:migrations:migrate
	$(PHP) bin/console doctrine:fixtures:load

pint: ## Run Pint
	@echo "$(GREEN)Running Pint$(NO_COLOR)"
	$(COMPOSER) run lint

pintf: ## Run Pint and fix
	@echo "$(GREEN)Running Pint and fixing$(NO_COLOR)"
	$(COMPOSER) run lint:fix

entity: ## Generate an entity
	$(PHP) bin/console make:entity
