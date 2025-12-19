/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compression
  compress: true,
  // Output standalone pour Docker
  output: "standalone",
  // Configuration Turbopack pour monorepo
  experimental: {
    turbo: {
      // Spécifier le répertoire racine du workspace pour Turbopack
      root: process.cwd(),
    },
  },
};

module.exports = nextConfig;

