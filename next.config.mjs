/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/app',
  // This ensures /app and /app/ both work
  trailingSlash: true, 
  // Required for Cloudflare/Webflow edge runtime
  output: 'standalone', 
};

export default nextConfig;
