import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dr-mohamed-abdelsaboor-portfolio1/', // 👈 لازم تكون نفس اسم الريبو على GitHub بالضبط
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
