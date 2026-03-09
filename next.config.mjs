/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disables automatic redirects so it doesn't fight with Webflow
  skipTrailingSlashRedirect: true,
  // Required for the Webflow Cloud edge runtime
  output: 'standalone',
};

export default nextConfig;
