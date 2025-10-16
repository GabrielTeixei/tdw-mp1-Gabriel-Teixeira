/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',  // Gera build estático
  trailingSlash: true // opcional, útil para URLs amigáveis
};

module.exports = nextConfig;
