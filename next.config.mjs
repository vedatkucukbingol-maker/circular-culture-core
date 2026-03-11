/** @type {import('next').NextConfig} */
const nextConfig = {
  // Eğer output: 'export' varsa bunu SİL. Vercel için gerek yok.
  typescript: {
    // Build sırasında tip hataları olsa bile devam etmesini sağlar
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint hataları build'i durdurmasın
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
