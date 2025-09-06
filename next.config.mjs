/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { enabled: true } },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
