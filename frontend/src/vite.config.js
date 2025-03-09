import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    react(),
    tailwindcss(),
  
<<<<<<<< HEAD:frontend/vite.config.js
  ],base: "./",
========
  ],
  base: "./",
>>>>>>>> c8f383754171112eac2f2ae02f4b6c5afce6a0a7:frontend/src/vite.config.js
})
