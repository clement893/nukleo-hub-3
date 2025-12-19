# Utiliser Node.js 20
# Build timestamp: 2025-12-19
FROM node:20-alpine AS base

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

# Étape de dépendances
FROM base AS deps
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY turbo.json ./

# Installer les dépendances
RUN pnpm install

# Étape de build
FROM base AS builder
WORKDIR /app

# Copier les dépendances
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules

# Copier le code source
COPY . .

# Build l'application depuis le répertoire web
WORKDIR /app/apps/web
RUN pnpm build

# Étape de production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copier les fichiers nécessaires depuis le build standalone
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

# Exposer le port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Démarrer l'application
CMD ["node", "apps/web/server.js"]

