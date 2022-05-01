import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/testimonials-grid-section/",
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
});