import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@actions": "/src/actions",
      "@api": "/src/api",
      "@components": "/src/components",
      "@data": "/src/data",
      "@hooks": "/src/hooks",
      "@loaders": "/src/loaders",
      "@routes": "/src/routes",
    },
  },
});
