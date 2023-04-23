import { fileURLToPath, URL } from 'node:url';
// eslint-disable-next-line import/no-extraneous-dependencies
// import eslintPlugin from 'vite-plugin-eslint';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      extensions: ['.js', '.vue']
    },
  },
});

// eslintPlugin();
