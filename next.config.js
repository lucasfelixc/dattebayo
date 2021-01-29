const withPlugins = require('next-compose-plugins')

const nextConfig = {
  images: {
    domains: ['media.kitsu.io']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = withPlugins([], nextConfig)
