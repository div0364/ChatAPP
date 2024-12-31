import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "https://chatapp-assl.onrender.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist", // Default output directory
  },
});
