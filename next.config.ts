import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/hire-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/hire-full-stack-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/freelance-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/freelance-full-stack-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/hire-react-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/hire-nextjs-developer', destination: '/hire-freelance-developer', permanent: true },
      { source: '/hire-nodejs-developer', destination: '/hire-freelance-developer', permanent: true },
    ];
  },
};

export default nextConfig;
