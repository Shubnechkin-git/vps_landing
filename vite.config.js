import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'desktop-nfe3dhf.tailb530bb.ts.net',
      '.tailb530bb.ts.net',
      'localhost',
      '127.0.0.1'
    ]
  }
})

