/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // config.node = {
    //     fs: "empty",
    // };
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
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.pexels.com']
  }
}

module.exports = nextConfig
