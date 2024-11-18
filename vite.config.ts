import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const url = env.VITE_API_SERVER_URL;
  const backendUrl = env.VITE_API_BACKEND_URL;

  return {
    resolve: {
      alias: { find: '@', replacement: resolve(__dirname, 'src') },
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        '/yclinghomerun': {
          target: url,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/yclinghomerun/, ''),
        },
        '/api': {
          target: backendUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
