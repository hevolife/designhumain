.PHONY: help build up down logs restart clean

help:
	@echo "Commandes disponibles:"
	@echo "  make build    - Construire l'image Docker"
	@echo "  make up       - Démarrer l'application"
	@echo "  make down     - Arrêter l'application"
	@echo "  make logs     - Afficher les logs"
	@echo "  make restart  - Redémarrer l'application"
	@echo "  make clean    - Supprimer les conteneurs et images"

build:
	docker-compose build

up:
	docker-compose up -d
	@echo "Application démarrée sur http://localhost"

down:
	docker-compose down

logs:
	docker-compose logs -f

restart:
	docker-compose restart

clean:
	docker-compose down --rmi all --volumes
