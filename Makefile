install:
	yarn install

start: install start-db prisma-generate start-auth
	yarn start

start-new: install start-db prisma-generate prisma-migration-apply seed-backend start-auth
	yarn start

seed-backend:
	yarn backend:seed

prisma-generate:
	yarn prisma:generate

prisma-migration-apply:
	yarn prisma:migration:apply --create-db

start-db:
	docker-compose up -d --remove-orphans db

start-auth:
	docker-compose up -d --remove-orphans auth

stop-services:
	docker-compose down

start-elk:
	docker-compose up -d elasticsearch kibana
