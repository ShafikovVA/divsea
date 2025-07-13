import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule: { test: { test: (arg0: string) => any; }; }) =>
      rule.test?.test?.('.svg'),
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, 
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        use: ['@svgr/webpack'],
      },
    )
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  }
};

export default nextConfig;
