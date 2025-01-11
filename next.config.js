// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // Output directory for service worker
  register: true, // Automatically register service worker
  skipWaiting: true, // Activate service worker immediately
  scope: '/app', // Define the scope of the service worker
  sw: 'service-worker.js', // Name of the service worker file
  // disable: process.env.NODE_ENV === 'development', // Uncomment to disable in development mode
});

module.exports = withPWA({
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
});
