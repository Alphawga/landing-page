/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
 
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'precision-keywords.com',
            },
          ],
          destination: '/precision-keywords/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'precision-grammar.com',
            },
          ],
          destination: '/precision-grammar/:path*',
        },
       
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true
  },
};

module.exports = nextConfig; 