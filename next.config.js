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
  // Improve performance
  output: 'standalone'
};

module.exports = nextConfig;