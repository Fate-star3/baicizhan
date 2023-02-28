import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3011,
    open: true,
    proxy: {
      '^/server/.*': {
        target: 'http://127.0.0.1:3030',
        secure: false,
        changeOrigin: true,
      },

    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/')
    }
  },
  base: './',

})


