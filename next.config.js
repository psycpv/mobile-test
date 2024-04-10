module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/trade',
        permanent: false,
      },
    ]
  },
}
