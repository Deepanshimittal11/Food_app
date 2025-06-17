// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true }
// }

// module.exports = nextConfig

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;