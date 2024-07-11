// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
// }

// module.exports = nextConfig

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, // Disable SWC minification
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Disable Terser minification
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig;
