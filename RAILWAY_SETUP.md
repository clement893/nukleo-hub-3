# Configuration Railway pour Node.js 20

## Problème
Railway utilise Railpack qui lit `.nvmrc` mais peut utiliser un cache.

## Solution

### 1. Fichiers de configuration
Les fichiers suivants sont configurés pour Node.js 20.9.0 :
- `.nvmrc` : `20.9.0`
- `.node-version` : `20.9.0`
- `package.json` : `"node": ">=20.9.0"`
- `nixpacks.toml` : `nodejs-20_x`

### 2. Variable d'environnement Railway
Dans le dashboard Railway, ajoutez la variable d'environnement :
```
RAILWAY_NODE_VERSION=20.9.0
```

### 3. Effacer le cache
Dans Railway :
1. Allez dans "Deployments"
2. Cliquez sur "Clear cache & redeploy"

### 4. Vérifier les logs
Après le redéploiement, vérifiez que les logs montrent :
```
Using Node.js version: 20.9.0
```

