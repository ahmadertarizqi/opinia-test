import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            APP_TITLE: env.VITE_APP_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: [
        { find: '~', replacement: path.resolve(__dirname, 'src') }
      ]
    }
  }
})
