/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  },
};

export default nextConfig;
