/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/precision-keywords',
        permanent: true,
      },
    ];
  },
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
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'eatcleanfit.com',
            },
          ],
          destination: '/eat-clean/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'easymultilingo.com',
            },
          ],
          destination: '/easy-multilingo/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig; 