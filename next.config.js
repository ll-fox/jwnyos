/** @type {import('next').NextConfig} */
const withLess = require('next-with-less')

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            esModule: false // 这里设置为false
          }
        }
      ]
    })
    return config
  },
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['localhost', 'images.pexels.com']
  }
}

module.exports = withLess(nextConfig, {
  lessOptions: {
    modifyVars: { '@primary-color': '#1890ff' },
  }
})
