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
      root: process.cwd(),
    },
  },
};

module.exports = nextConfig;

