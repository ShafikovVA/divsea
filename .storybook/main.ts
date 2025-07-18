import type { StorybookConfig } from '@storybook/nextjs-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['..\\public'],
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        include: /\.svg$/,
        svgrOptions: {
          exportType: 'default',
          ref: true,
          icon: true,
        },
      }),
    );

    config.plugins = config.plugins!.flat().map((plugin) => {
      if (
        typeof plugin === 'object' &&
        plugin !== null &&
        'name' in plugin &&
        plugin.name === 'vite-plugin-storybook-nextjs-image'
      ) {
        return {
          ...plugin,
          // the plugin handles *.svg by `resolveId` hook
          // see https://github.com/storybookjs/vite-plugin-storybook-nextjs/blob/b0e2b83ed5cfe666388a87a1935c9b511788eb16/src/plugins/next-image/plugin.ts#L54
          resolveId(id, importer) {
            // Skip .svg imports
            if (id.endsWith('.svg')) {
              return null;
            }

            // @ts-expect-error `resolveId` hook of vite-plugin-storybook-nextjs-image is a function
            return plugin.resolveId(id, importer);
          },
        };
      }
      return plugin;
    });
    return config;
  },
};

export default config;
