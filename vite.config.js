import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yd025.github.io/', 
  build: {
    outDir: 'docs',
  },
})

