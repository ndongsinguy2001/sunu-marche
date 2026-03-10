/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint en production
  },
}

module.exports = nextConfig