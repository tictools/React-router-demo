import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@api": "/src/api",
      "@components": "/src/components",
      "@data": "/src/data",
      "@loaders": "/src/loaders",
      "@routes": "/src/routes",
    },
  },
});
