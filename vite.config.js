//Importar React y otros componentes necesarios
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    // se pone proxy para evitar CORS en desarrollo
    proxy: {
      '/api/translate': {
        target: 'https://libretranslate.de',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/translate/, '/translate'),
      },
    },
    // se pone hmr explícito para evitar problemas en algunos entornos (WS no funciona bien)
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
})