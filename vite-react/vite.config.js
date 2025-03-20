
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons/fa': 'react-icons/fa/index.js', // حل مشكلة استيراد react-icons
    },
  },
  build: {
    rollupOptions: {
      external: ['bootstrap', 'react-icons'], // ضمان عدم حصول مشاكل في الاستيراد
    },
  },
  publicDir: 'public', // تأكد أن الصور داخل مجلد public سيتم قراءتها بشكل صحيح
  assetsInclude: ['/.png', '/.jpg', '/.jpeg', '/.svg'], // دعم تحميل الصور
});