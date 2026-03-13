/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gereksiz 'eslint' veya 'typescript' bloklarını kaldırın, sadece bunları bırakın
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
