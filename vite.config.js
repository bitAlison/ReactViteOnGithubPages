import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://bit.Alison.github.io/ReactViteOnGithubPages",
  plugins: [react()],
})
