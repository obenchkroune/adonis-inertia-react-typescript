import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/ts'),
      '@css': path.resolve(__dirname, './resources/css'),
    },
  },
  plugins: [
    adonisjs({
      entrypoints: ['resources/ts/app.tsx', 'resources/css/app.css'],
      reload: ['resources/views/**/*.edge'],
    }),
    react(),
  ],
})
