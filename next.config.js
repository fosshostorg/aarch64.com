const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, {}]], {
  async headers() {
    const headers = [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: `nosniff`,
          },
        ],
      },
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: `no-referrer-when-downgrade`,
          },
        ],
      },
    ];

    return headers;
  },

  async rewrites() {
    const rewrites = [
      {
        source: `/robots.txt`,
        destination: process.env.NEXT_PUBLIC_APP_STAGE === 'production' ? `/robots.txt` : `/`,
      },
    ];

    return rewrites;
  },

  poweredByHeader: false,
  reactStrictMode: true,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
