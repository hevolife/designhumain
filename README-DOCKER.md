# Guide d'installation Docker

Ce guide vous explique comment installer et exécuter l'application avec Docker.

## Prérequis

- Docker installé sur votre machine ([Télécharger Docker](https://www.docker.com/get-started))
- Docker Compose (inclus avec Docker Desktop)

## Installation rapide

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd <nom-du-projet>
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet en copiant `.env.example`:

```bash
cp .env.example .env
```

Modifiez le fichier `.env` avec vos valeurs Supabase:

```env
VITE_SUPABASE_URL=https://votre-project.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

### 3. Lancer l'application

#### Option 1: Avec Docker Compose (recommandé)

```bash
docker-compose up -d
```

L'application sera accessible sur [http://localhost](http://localhost)

#### Option 2: Avec Docker uniquement

```bash
# Construire l'image
docker build \
  --build-arg VITE_SUPABASE_URL=https://votre-project.supabase.co \
  --build-arg VITE_SUPABASE_ANON_KEY=votre_cle_anon \
  -t mon-site .

# Lancer le conteneur
docker run -d -p 80:80 mon-site
```

## Commandes utiles

### Voir les logs

```bash
docker-compose logs -f
```

### Arrêter l'application

```bash
docker-compose down
```

### Reconstruire l'image après des modifications

```bash
docker-compose up -d --build
```

### Supprimer les conteneurs et images

```bash
docker-compose down --rmi all
```

## Personnalisation du port

Si le port 80 est déjà utilisé, modifiez le fichier `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Utilisera le port 8080
```

## Production

Pour un déploiement en production:

1. Utilisez des secrets pour les variables d'environnement
2. Configurez un reverse proxy (Traefik, Nginx) pour HTTPS
3. Activez les logs appropriés
4. Configurez les limites de ressources dans docker-compose.yml

## Support

Pour toute question, consultez la documentation de Docker ou créez une issue.
