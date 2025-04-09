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

# [[general]] run docker compose & nextjs local server
start:
	@echo "Starting Docker services..."
	$(DOCKER_COMPOSE) up -d
	@echo "Waiting for database to be ready..."
	sleep 3
	@echo "Starting Next.js development server..."
	bun --bun run dev

# [[General]] Set permissions for Prisma files
super:
	sudo chmod -R 777 . && sudo chmod -R 777 ./prisma

# [[Prisma]] Migrate with timestamp
migrate:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma migrate dev --name $(TIMESTAMP) --skip-seed --skip-generate

# [[Prisma]] Push schema to database
push:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma db push --accept-data-loss --skip-generate 

# [[Prisma]] Local Generate Prisma client
local_generate:
	bunx prisma generate 

# [[Prisma]] Generate Prisma client inside container
generate:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma generate 

# [[Prisma]] Reset database
reset:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma migrate reset --force --skip-seed --skip-generate 

# [[Prisma]] Run Prisma seed
seed:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma db seed 

# [[Prisma]] Migrate for production
production:
	$(DOCKER_COMPOSE) run --rm $(DB_CONTAINER) bunx prisma migrate deploy

# [[Redis]] clear all
redis-clear:
	@echo "Clearing all Redis cache..."
	$(DOCKER_COMPOSE) exec $(REDIS_CONTAINER) redis-cli FLUSHALL

# [[Redis]] restart
redis-restart:
	@echo "Restarting Redis container..."
	$(DOCKER_COMPOSE) restart $(REDIS_CONTAINER)

# [[Redis]] connection check
redis-ping:
	@echo "Pinging Redis to check connection..."
	$(DOCKER_COMPOSE) exec $(REDIS_CONTAINER) redis-cli PING

# [[Redis]] list all keys
redis-keys:
	@echo "Fetching all Redis keys..."
	$(DOCKER_COMPOSE) exec $(REDIS_CONTAINER) redis-cli KEYS '*'

# [[Docker]] Start Application
up:
	$(DOCKER_COMPOSE) up

# [[Docker]] Build and start services
build:
	$(DOCKER_COMPOSE) up --build

# [[Docker]] Start services in detached mode
detach:
	$(DOCKER_COMPOSE) up -d

# [[Docker]] Stop services
down:
	$(DOCKER_COMPOSE) down

# [[Docker]] Rebuild services
rebuild:
	$(DOCKER_COMPOSE) up --build

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
