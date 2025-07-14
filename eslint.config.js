import js from '@eslint/js';
import react from 'eslint-plugin-react';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import next from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      js,
      prettier,
      '@next/next': next,
    },
    extends: ['js/recommended'],
    settings: {
      'import/resolver': {
        typescript: true,
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
]);
