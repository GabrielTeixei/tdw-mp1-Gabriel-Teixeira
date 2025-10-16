/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
  },
  output: 'export',      
  trailingSlash: true,   
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

module.exports = nextConfig;
