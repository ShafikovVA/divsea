import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => unknown } }) =>
        rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  eslint: {
    dirs: ['components', 'app', 'lib', 'pages', 'utils', 'styles'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.assets.so',
      },
    ],
  },
};

export default nextConfig;
