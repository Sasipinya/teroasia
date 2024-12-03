

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teroasia.com',
      },
      {
        protocol: 'https',
        hostname: 'backend.teroasia.com',
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig