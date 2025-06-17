import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './hydrate/hydrateForms.tsx'

      },
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'toolkit.css'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/index.scss";`
      }
    }
  }
});
