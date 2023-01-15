/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/decks',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
