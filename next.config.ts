import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.seppasolutions.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    const textileSlugs = [
      'the-role-of-sustainable-fabrics-in-modern-fashion',
      'sustainable-practices-in-modern-textile-manufacturing',
      'sustainable-textile-trends-shaping-global-industry-today',
      'how-technology-is-revolutionizing-fabric-production',
      'key-quality-standards-every-textile-manufacturer-should-follow',
      'how-sustainable-practices-improve-textile-manufacturing-efficiency',
    ];

    const redirectsList: any[] = [];
    textileSlugs.forEach((slug) => {
      redirectsList.push({
        source: `/:locale(en|ar|de|nl|fr)/${slug}/`,
        destination: '/:locale/blog/',
        permanent: true,
      });
      redirectsList.push({
        source: `/:locale(en|ar|de|nl|fr)/${slug}`,
        destination: '/:locale/blog/',
        permanent: true,
      });
      redirectsList.push({
        source: `/${slug}/`,
        destination: '/en/blog/',
        permanent: true,
      });
      redirectsList.push({
        source: `/${slug}`,
        destination: '/en/blog/',
        permanent: true,
      });
    });

    return redirectsList;
  },
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
}

export default withNextIntl(nextConfig)
