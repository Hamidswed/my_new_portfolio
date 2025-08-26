import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    target: 'es2015',
    // Optimize chunk splitting - less aggressive
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          utils: ['i18next', 'react-i18next', 'socket.io-client'],
        },
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false,
  },
})
