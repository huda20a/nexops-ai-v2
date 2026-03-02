/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.qrserver.com'],
  },
  // This allows the production build to finish even if there are ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This prevents TypeScript errors from stopping the build
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;