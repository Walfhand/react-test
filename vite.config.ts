import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../Api/Api/wwwroot',
  },
  server: {
      port: 3000,
      open: true,
      host: true
  },
  plugins: [react()],
})
