import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      _APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [react(), glsl()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    base: `/`, // using custom domain
    server: {
      port: `${env.PORT}`
    },
  }
})
