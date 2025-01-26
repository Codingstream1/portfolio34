import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this

console.log('Project Root:', __dirname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Map `@` to the absolute path of `src`
    },
  },
  root: './', // This sets the root of the project
});
