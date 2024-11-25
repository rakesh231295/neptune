import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@': '/src',
      "slick-carousel/slick": "node_modules/slick-carousel/slick",
      base: "/neptune",
    },
  },
});


