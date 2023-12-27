import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/'),
      "@api": `${path.resolve(__dirname, "./src/services/apis/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/scss/index.scss";` },
    }
  }
})
