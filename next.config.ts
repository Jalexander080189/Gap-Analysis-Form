// 👉 Paste this into your next.config.ts (overwrite existing config)

import path from 'path';
import { defineConfig } from 'next';

export default defineConfig({
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
});