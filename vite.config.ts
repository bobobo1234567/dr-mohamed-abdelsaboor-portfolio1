import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // خليته نسبي عشان يبقى مناسب للنشر على الفرع main
  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
