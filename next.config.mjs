/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // Projende desteklediğin diller
    locales: ['en', 'tr', 'de', 'es'],
    // Varsayılan dil
    defaultLocale: 'tr',
  },
  // Vercel'de bazen gerekebilen çıktı ayarı
  output: 'standalone', 
};

export default nextConfig;
