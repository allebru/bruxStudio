/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for hosting
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,

  // Optimize for SEO
  compress: true,

  // Note: Custom headers are not supported with static export.
  // Configure security headers at your hosting provider level instead.
  // Recommended headers for production:
  // - X-DNS-Prefetch-Control: on
  // - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  // - X-Frame-Options: SAMEORIGIN
  // - X-Content-Type-Options: nosniff
  // - X-XSS-Protection: 1; mode=block
  // - Referrer-Policy: origin-when-cross-origin
}

module.exports = nextConfig
