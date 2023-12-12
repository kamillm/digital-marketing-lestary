/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // path: ['https://ik.imagekit.io', 'static.cdn-cdpl.com'],
    unoptimized: true,
    domains: [
      'i.ibb.co',
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
});

module.exports = nextConfig;
