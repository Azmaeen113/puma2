import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu', '@rollup/rollup-linux-x64-musl', '@rollup/rollup-darwin-x64', '@rollup/rollup-darwin-arm64', '@rollup/rollup-win32-x64-msvc']
  },
  define: {
    'process.env.NPM_CONFIG_INCLUDE': '"optional"'
  }
}));
