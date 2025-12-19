/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimisations pour la production
  swcMinify: true,
  // Compression
  compress: true,
  // Output standalone pour Docker
  output: "standalone",
};

module.exports = nextConfig;

