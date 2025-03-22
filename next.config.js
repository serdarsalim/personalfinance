/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles image optimization automatically
  images: {
    // Add domains if you're loading images from external URLs
    // domains: ['example.com']
  },
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
};

module.exports = nextConfig;