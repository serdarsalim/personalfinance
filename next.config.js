/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles image optimization automatically
  images: {
    // Add domains if you're loading images from external URLs
    // domains: ['example.com']
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  // Optimize bundle for modern browsers
  swcMinify: true,
  // Target modern browsers to eliminate polyfills
  compiler: {
    // Removes console.* in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Improve performance
  output: 'standalone',
  // Redirects for consolidated comparison pages
  async redirects() {
    return [
      {
        source: '/compare/ynab-alternative',
        destination: '/compare#ynab',
        permanent: true,
      },
      {
        source: '/compare/mint-alternative',
        destination: '/compare#mint',
        permanent: true,
      },
      {
        source: '/compare/everydollar-alternative',
        destination: '/compare#everydollar',
        permanent: true,
      },
      {
        source: '/compare/pocketguard-alternative',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/quicken-alternative',
        destination: '/compare',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;