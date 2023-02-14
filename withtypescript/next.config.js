/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["eldenring.fanapis.com"],
    loader: "custom",
    path: "/"
  }
}

module.exports = nextConfig
