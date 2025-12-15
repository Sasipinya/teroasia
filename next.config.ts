import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
const isAnalyze = process.env.ANALYZE === 'true';
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teroasia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.teroasia.com',
      },
      {
        protocol: 'https',
        hostname: 'backend.teroasia.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24,
  },

  experimental: {
    forceSwcTransforms: true,
    optimizeCss: true
  },
   productionBrowserSourceMaps: true, // ✅ เปิดให้ devtools เห็น source .tsx

  reactStrictMode: true, // ✅ เตือน lifecycle ที่ไม่ปลอดภัย + hydrate mismatch

  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
