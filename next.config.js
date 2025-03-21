// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // This feature disables static optimization
    experimental: {
      missingSuspenseWithCSRBailout: false
    }
  };
  
  // Use CommonJS export syntax
  module.exports = nextConfig;