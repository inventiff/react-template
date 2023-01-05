import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import htmlPlugin from 'vite-plugin-html-config';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
    pwa({
      registerType: 'autoUpdate',
    }),
    htmlPlugin({
      favicon: 'favicon.svg',
      title: 'React Inventiff',
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
});
