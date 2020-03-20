install:
	yarn install

start-new: install start-db prisma-generate prisma-migration-apply seed-backend
	yarn start

start: install start-db prisma-generate
	yarn start

seed-backend:
	yarn backend:seed

prisma-generate:
	yarn prisma:generate

prisma-migration-apply:
	yarn prisma:migration:apply --create-db

start-db:
	docker-compose up -d --remove-orphans db

stop-services:
	docker-compose down

start-elk:
	docker-compose up -d elasticsearch kibana
