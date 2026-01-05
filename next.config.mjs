/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Abilitiamo AVIF per la massima compressione (fino al 20% meglio di WebP)
    formats: ['image/avif', 'image/webp'],
    // Definiamo le larghezze che Vercel userà per ridimensionare le foto automaticamente
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;