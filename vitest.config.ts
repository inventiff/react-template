/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    reporters: ['default', 'html'],
    mockReset: true,
  },
});
