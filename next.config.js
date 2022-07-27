const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
}

module.exports = nextConfig
