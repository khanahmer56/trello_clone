/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloud.appwrite.io", "links.papareact.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
