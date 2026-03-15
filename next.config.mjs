/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript hataları olsa bile build'e devam et
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint hataları olsa bile build'e devam et
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
