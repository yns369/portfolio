import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio/',  // should be changed
  plugins: [vue()],
})
