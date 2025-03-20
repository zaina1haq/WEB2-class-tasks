
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons/fa': 'react-icons/fa/index.js', 
    },
  },
  build: {
    rollupOptions: {
      external: ['bootstrap', 'react-icons'], 
    },
    outDir: 'dist',
    sourcemap: true,
  },
  publicDir: 'public', 
  assetsInclude: ['/.png', '/.jpg', '/.jpeg', '/.svg'], 
});