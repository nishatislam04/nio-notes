# Variables
DOCKER_COMPOSE = docker compose -f docker-compose.yml
REDIS_CONTAINER = redis
DB_CONTAINER = postgres-nio-notes
DB_USER ?= nishat
DB_PASS ?= 1234
DB_NAME ?= nio-notes
TIMESTAMP = $(shell date +%Y.%m.%d.%H.%M.%S)

SCHEMA = prisma/schema.prisma

# Targets
.PHONY: grant-all migrate push reset production super

# [[General]] Set permissions for Prisma files
super:
	sudo chmod -R 777 . && sudo chmod -R 777 ./prisma

# [[Prisma]] Migrate with timestamp
migrate:
	$(DOCKER_COMPOSE) run --rm app bun prisma migrate dev --name $(TIMESTAMP) --skip-seed --skip-generate

# [[Prisma]] Push schema to database
push:
	$(DOCKER_COMPOSE) run --rm app bun prisma db push --accept-data-loss --skip-generate

# [[Prisma]] Local Generate Prisma client
local_generate:
	bunx prisma generate 

# [[Prisma]] Generate Prisma client inside container
generate:
	$(DOCKER_COMPOSE) run --rm app bun prisma generate

# [[Prisma]] Reset database
reset:
	$(DOCKER_COMPOSE) run --rm app bun prisma migrate reset --force --skip-seed --skip-generate

# [[Prisma]] Run Prisma seed
seed:
	$(DOCKER_COMPOSE) run --rm app bun prisma db seed

# [[Prisma]] Migrate for production
production:
	$(DOCKER_COMPOSE) run --rm app bun prisma migrate deploy

# [[Docker]] Install dependencies in the container
install:
	$(DOCKER_COMPOSE) exec $(DB_CONTAINER) bun install

# [[Docker]] View container logs
logs:
	$(DOCKER_COMPOSE) logs -f $(DB_CONTAINER)

# [[Docker]] Restart services
restart:
	$(DOCKER_COMPOSE) restart $(DB_CONTAINER)

# [[Docker]] Execute a shell in the container
exec:
	$(DOCKER_COMPOSE) exec $(DB_CONTAINER) sh

# [[Docker]] Remove orphaned containers
remove-orphans:
	$(DOCKER_COMPOSE) down --remove-orphans

# [[Docker]] Remove all resources for current app
flush:
	@echo "Cleaning up the resources..."
	$(DOCKER_COMPOSE) down --volumes --remove-orphans
	@docker system prune -f --volumes
	@echo "Cleanup completed."

# [[Docker]] Check container status
status:
	@docker ps | grep $(DB_CONTAINER) || echo "Container $(DB_CONTAINER) is not running."

# [[Docker]] Show container size
size:
	@docker ps --size | grep $(DB_CONTAINER) || echo "Container is not running."
