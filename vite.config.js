import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@Pages', replacement: resolve(__dirname, 'src/Pages') },
      { find: '@Components', replacement: resolve(__dirname, 'src/Components') },
      { find: '@Assets', replacement: resolve(__dirname, 'src/assets') },
    ]
  }
})
