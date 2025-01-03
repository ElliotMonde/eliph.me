import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode, command}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      _APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [react()],
    base: `${env.ASSET_URL}`,
    server: {
      port: "3000"
    }
  }
})
