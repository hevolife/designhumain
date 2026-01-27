# Design Humain - Site Web

Site web de coaching en Design Humain avec accompagnements personnalisés.

## 🚀 Installation

### Développement Local

```bash
# Installation des dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build
```

### Installation avec Docker

Pour déployer facilement avec Docker, consultez le [guide Docker](README-DOCKER.md).

```bash
# Méthode rapide
docker-compose up -d
```

## ⚙️ Configuration

Créez un fichier `.env` à la racine:

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

## 📊 Base de Données

Le projet utilise Supabase pour:
- Gestion des demandes de contact
- Inscriptions aux ateliers
- Sessions de découverte

### Éviter la Mise en Pause de la Base de Données

Pour garder votre base de données Supabase active en permanence, consultez le [guide de configuration du cronjob](CRON-SETUP.md).

**Résumé rapide:**
1. Une fonction Edge `keep-alive` est déjà déployée
2. Configurez un service gratuit comme cron-job.org pour appeler cette fonction toutes les heures
3. Votre base de données restera toujours active

## 📁 Structure du Projet

```
.
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/          # Pages de l'application
│   ├── lib/            # Configuration Supabase
│   └── types/          # Types TypeScript
├── supabase/
│   ├── migrations/     # Migrations de base de données
│   └── functions/      # Edge Functions
└── public/             # Assets statiques
```

## 🛠️ Technologies

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Base de données:** Supabase
- **Déploiement:** Docker + Nginx

## 📚 Documentation

- [Guide Docker](README-DOCKER.md)
- [Configuration Cronjob](CRON-SETUP.md)

## 🎯 Fonctionnalités

- ✅ Page d'accueil avec hero section
- ✅ Présentation du Design Humain
- ✅ Page de coaching individuel
- ✅ Grille tarifaire
- ✅ Formulaires de contact
- ✅ Design responsive
- ✅ Déploiement Docker
- ✅ Keep-alive automatique

## 📝 Licence

Tous droits réservés.
