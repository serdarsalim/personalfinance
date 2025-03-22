/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change this from 'standalone' to either nothing or 'export'
  // Remove the output setting completely or use export
  images: {
    unoptimized: true 
  },
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
};

module.exports = nextConfig;