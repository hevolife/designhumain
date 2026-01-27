# Configuration du Cronjob Keep-Alive

Ce guide explique comment configurer un cronjob pour éviter que votre base de données Supabase ne se mette en pause automatiquement après inactivité.

## Fonction Edge Déployée

Une fonction Edge `keep-alive` a été déployée sur votre projet Supabase. Elle effectue une requête simple à votre base de données pour la maintenir active.

**URL de la fonction:**
```
https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive
```

## Solutions de Cronjob (Gratuites)

### Option 1: Cron-job.org (Recommandé)

1. Créez un compte sur [cron-job.org](https://cron-job.org)
2. Allez dans "Cronjobs" > "Create cronjob"
3. Configurez:
   - **Title:** Keep Supabase Alive
   - **Address:** `https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive`
   - **Schedule:** Toutes les heures (ou toutes les 30 minutes)
   - **HTTP method:** GET
   - **Headers:** Aucun header nécessaire (la fonction est publique)

### Option 2: EasyCron

1. Créez un compte sur [easycron.com](https://www.easycron.com)
2. Cliquez sur "Add Cron Job"
3. Configurez:
   - **URL:** `https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive`
   - **Cron Expression:** `0 * * * *` (toutes les heures)

### Option 3: UptimeRobot

1. Créez un compte sur [uptimerobot.com](https://uptimerobot.com)
2. Ajoutez un nouveau moniteur:
   - **Monitor Type:** HTTP(s)
   - **URL:** `https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive`
   - **Monitoring Interval:** 30-60 minutes

### Option 4: GitHub Actions (Si votre projet est sur GitHub)

Créez `.github/workflows/keep-alive.yml`:

```yaml
name: Keep Supabase Alive

on:
  schedule:
    # Toutes les heures
    - cron: '0 * * * *'
  workflow_dispatch:

jobs:
  keep-alive:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Keep-Alive Function
        run: |
          curl -X GET https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive
```

## Fréquence Recommandée

- **Minimum:** Toutes les heures (60 minutes)
- **Optimal:** Toutes les 30 minutes
- **Maximum sécurisé:** Toutes les 4 heures

**Note:** Les projets Supabase gratuits se mettent en pause après 7 jours d'inactivité. Un ping toutes les heures est largement suffisant.

## Vérification

Pour vérifier que votre cronjob fonctionne:

1. Testez manuellement la fonction:
```bash
curl https://ibtrxutmaqvmicumwdym.supabase.co/functions/v1/keep-alive
```

2. Vous devriez recevoir une réponse JSON:
```json
{
  "status": "success",
  "message": "Keep-alive ping successful",
  "timestamp": "2027-01-27T...",
  "project": "designhumain"
}
```

3. Vérifiez les logs de votre service cron pour confirmer les exécutions réussies

## Logs et Monitoring

Pour voir les logs de votre fonction Edge:
1. Allez sur [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans "Edge Functions" > "keep-alive" > "Logs"

## Avantages

✅ Évite la mise en pause automatique de la base de données
✅ Garantit une disponibilité constante de votre application
✅ Temps de réponse optimaux pour vos utilisateurs
✅ Aucun coût supplémentaire (tous les services listés ont un plan gratuit)

## Support

Si vous rencontrez des problèmes, vérifiez:
- Que la fonction Edge est bien déployée
- Que l'URL et la clé API sont correctes
- Les logs de la fonction pour identifier les erreurs
