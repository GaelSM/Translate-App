import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve, join} from 'path'

const root = join(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: resolve(join(root, 'components'))},
      { find: '@hooks', replacement: resolve(join(root, 'hooks'))},
      { find: '@assets', replacement: resolve(join(root, 'assets'))},
      { find: '@context', replacement: resolve(join(root, 'context'))},
      { find: '@', replacement: resolve(root)}
    ]
  }
})

