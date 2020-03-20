start-new: start-db
	yarn generate
	yarn migration:apply --create-db
	yarn seed
	yarn start

start: start-db
	yarn generate
	yarn start

start-db:
	docker-compose up -d --remove-orphans postgresql

stop-services:
	docker-compose down
