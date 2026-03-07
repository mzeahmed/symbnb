RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[0;33m
BLUE=\033[0;34m
NO_COLOR=\033[0m

DOCKER = docker compose
PHP = $(DOCKER) exec php
CONSOLE = $(PHP) php bin/console

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

db-shell: ## Open a database shell
	$(DOCKER) exec database psql -U app -d app

reset-db: ## Reset the database
	$(PHP) bin/console doctrine:database:drop --force
	$(PHP) bin/console doctrine:database:create
	$(PHP) bin/console doctrine:migrations:migrate
	$(PHP) bin/console doctrine:fixtures:load
