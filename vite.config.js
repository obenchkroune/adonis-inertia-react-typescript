import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@css/*": p
  //   }
  // }
  plugins: [
    adonisjs({
      entrypoints: ['resources/ts/app.tsx', 'resources/css/app.css'],
      reload: ['resources/views/**/*.edge'],
    }),
    react(),
  ],
})
