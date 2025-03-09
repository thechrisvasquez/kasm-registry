/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'thechrisvasquez Technologies',
    description: 'The official store for my Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://github.com/thechrisvasquez/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
