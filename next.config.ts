const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'art.pixilart.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;