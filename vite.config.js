import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Arshiyashafizade-portfolio/', // This is crucial for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
  