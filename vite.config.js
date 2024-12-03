import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/', // Add the correct base path for GitHub Pages
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
});
