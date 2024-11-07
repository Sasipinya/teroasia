/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['teroasia.com','backend.teroasia.com'],
    },
    swcMinify: false, 
    experimental: {
      forceSwcTransforms: true,
    },
};

export default nextConfig;