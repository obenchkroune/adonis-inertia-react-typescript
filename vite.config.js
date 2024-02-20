import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'ts',
        replacement: fileURLToPath(new URL('./resources/ts'), import.meta.url),
      },
      {
        find: 'css',
        replacement: fileURLToPath(new URL('./resources/css'), import.meta.url),
      },
    ],
  },
  plugins: [
    adonisjs({
      entrypoints: ['resources/ts/app.tsx', 'resources/css/app.css'],
      reload: ['resources/views/**/*.edge'],
    }),
    react(),
  ],
})
