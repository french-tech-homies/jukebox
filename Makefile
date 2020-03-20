start-new: start-db
	cd backend && yarn generate
	cd backend && yarn migration:apply --create-db
	cd backend && yarn seed
	cd backend && yarn start

start: start-db start-backend start-web

start-web:
	cd frontend && yarn install
	cd frontend && yarn start

start-backend:
	cd backend && yarn install
	cd backend && yarn generate
	cd backend && yarn start

start-db:
	docker-compose up -d --remove-orphans db

stop-services:
	docker-compose down
