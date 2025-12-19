/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compression
  compress: true,
  // Output standalone pour Docker
  output: "standalone",
  // Note: Turbopack est désactivé via NEXT_BUILD_USE_TURBOPACK=0
  // dans le Dockerfile et le script de build pour éviter les problèmes
  // dans les monorepos. Turbopack reste disponible pour le dev avec `next dev --turbo`
};

module.exports = nextConfig;

