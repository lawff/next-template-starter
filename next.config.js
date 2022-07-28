const UnoCSS = require('@unocss/webpack').default
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // distDir: 'build',
  swcMinify: true,
  webpack: (config, { ...options }) => {
    if (options.buildId !== 'development') {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false
    }
    config.plugins.push(
      UnoCSS(),
    )
    return config
  },
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? '' : '',
}

module.exports = withBundleAnalyzer(nextConfig)
