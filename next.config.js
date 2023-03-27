/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: false,
    },
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
