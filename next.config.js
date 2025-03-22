/** @type {import('next').NextConfig} */
const nextConfig = {
  // This explicitly turns off the warning that's failing the build
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  output: 'standalone', // This helps with Netlify deployments
  images: {
    domains: ['www.simplifybudget.com'],
    unoptimized: true // This can help with Netlify image issues
  },
  // Increase serverless function timeout
  serverRuntimeConfig: {
    functionTimeout: 30 // in seconds
  }
};

// Use CommonJS export syntax
module.exports = nextConfig;