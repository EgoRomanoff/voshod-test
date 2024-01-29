/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/list/1',
        permanent: true,
      },
      // {
      //   source: '/item/(.*)',
      //   destination: '/list/2',
      //   permanent: false,
      // },
    ]
  },
};

export default nextConfig;
