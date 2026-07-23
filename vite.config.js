import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work on GitHub Pages under ANY repository name
// (e.g. https://username.github.io/repo-name/) without further changes.
export default defineConfig({
  base: './',
  plugins: [react()],
})
