/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptioDns: { includePaths: [path.join(__dirname, 'styles')], },
}

module.exports = nextConfig
