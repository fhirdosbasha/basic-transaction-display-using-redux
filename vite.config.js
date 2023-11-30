import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/basic-transaction-display-using-redux/',
  plugins: [react()],
})
