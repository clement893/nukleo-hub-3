/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compression
  compress: true,
  // Output standalone pour Docker
  output: "standalone",
};

module.exports = nextConfig;

