import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/styles/global.scss';`,
      },
    },
  },
  server: {
    proxy: {
      "/image": {
        target: 'https://via.placeholder.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/image/, ""),
      },
    },
  },
});
