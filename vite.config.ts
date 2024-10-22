import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

// Ensure the publishable key is set
const publishableKey = process.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
    throw new Error("Missing Publishable Key");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // or wherever your API server is running
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
