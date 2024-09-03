import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@B-UI/components': path.resolve(__dirname, './ui/components'),
      '@B-UI/types': path.resolve(__dirname, './ui/types'),
    }
  }
})
