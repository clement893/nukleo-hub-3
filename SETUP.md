# Instructions de Setup

## ✅ Ce qui a été fait

1. ✅ Structure du monorepo Turborepo créée
2. ✅ Application Next.js 16 configurée avec Tailwind CSS
3. ✅ Composants UI créés (Button, Card)
4. ✅ Page d'accueil créée
5. ✅ Configuration Railway (nixpacks.toml)
6. ✅ Repo Git initialisé avec commit initial

## 📋 Prochaines étapes

### 1. Installer Node.js (si pas déjà installé)

Téléchargez et installez Node.js 18+ depuis [nodejs.org](https://nodejs.org/)

### 2. Installer pnpm

```bash
npm install -g pnpm
```

Ou avec PowerShell (Corepack):
```bash
corepack enable
corepack prepare pnpm@8.15.0 --activate
```

### 3. Installer les dépendances

```bash
cd C:\Users\cleme\nukleo-hub-3
pnpm install
```

### 4. Créer le repo GitHub

```bash
# Créer le repo sur GitHub (via l'interface web ou GitHub CLI)
# Puis connecter le repo local:

git remote add origin https://github.com/VOTRE_USERNAME/nukleo-hub-3.git
git branch -M main
git push -u origin main
```

### 5. Démarrer en développement

```bash
pnpm dev
```

L'application sera accessible sur http://localhost:3000

### 6. Déployer sur Railway

1. Allez sur [railway.app](https://railway.app)
2. Créez un nouveau projet
3. Connectez votre repo GitHub `nukleo-hub-3`
4. Railway détectera automatiquement le projet et le déploiera

## 📁 Structure du projet

```
nukleo-hub-3/
├── apps/
│   └── web/              # Application Next.js 16
│       ├── app/          # App Router
│       ├── components/   # Composants réutilisables
│       └── package.json
├── packages/             # Packages partagés (futur)
├── package.json          # Root package.json
├── turbo.json           # Configuration Turborepo
├── pnpm-workspace.yaml  # Configuration workspace pnpm
└── nixpacks.toml        # Configuration Railway

```

