import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// On GitHub Pages the site is served from /daycare_website/.
// Locally (dev) it's served from /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/daycare_website/' : '/',
  plugins: [react(), tailwindcss()],
}))
