/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'leetcard.jacoblin.com' },
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
    ],
  },
  // Ensure CSS is not tree-shaken incorrectly
  experimental: {},
}

module.exports = nextConfig
