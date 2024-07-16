import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This may not be necessary
    port: 5173,
  },
  // Optionally adjust build options if needed
  build: {
    // You can customize rollup options if necessary
    rollupOptions: {
      // Example of externalizing specific modules
      external: ['react-icons/fa'],
    },
  },
});
