import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The custom domain serves the site from its root path.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
