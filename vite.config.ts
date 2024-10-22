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
  base: '/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()]
});
