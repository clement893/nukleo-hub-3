/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimisations pour la production
  swcMinify: true,
  // Compression
  compress: true,
};

module.exports = nextConfig;

