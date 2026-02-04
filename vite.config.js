import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
=======
  plugins: [react()],
>>>>>>> 55d21f7f94ac0ef029e1771322d12ee9cf449d59
})
