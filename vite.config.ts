import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

const url = process.env.VITE_API_SERVER_URL;

// https://vitejs.dev/config/
export default defineConfig({
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
    },
  },
});
