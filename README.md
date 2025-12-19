# Nukleo Hub 3

Monorepo Turborepo avec Next.js 16

## Structure

```
nukleo-hub-3/
├── apps/
│   └── web/          # Application Next.js
├── packages/         # Packages partagés
└── turbo.json        # Configuration Turborepo
```

## Développement

```bash
# Installer les dépendances
pnpm install

# Démarrer en mode développement
pnpm dev

# Build
pnpm build

# Linter
pnpm lint
```

## Déploiement sur Railway

Ce projet est configuré pour être déployé sur Railway.

### Configuration

Le projet utilise les fichiers suivants pour Railway :
- `nixpacks.toml` : Configuration du build automatique
- `.nvmrc` : Version de Node.js (18)

### Étapes

1. Créez un nouveau projet sur [Railway](https://railway.app)
2. Connectez votre repository GitHub (`nukleo-hub-3`)
3. Railway détectera automatiquement le projet Next.js
4. Le build se lancera avec `pnpm install && pnpm build`
5. L'application démarrera avec `cd apps/web && pnpm start`

### Variables d'environnement

Ajoutez les variables d'environnement nécessaires dans le dashboard Railway si votre application en a besoin.

