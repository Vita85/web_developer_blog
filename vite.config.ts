import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: '@use "./src/styles/variables.scss" as *;',
      },
    },
    modules: {
      localsConvention: "camelCaseOnly",
    },
    postcss: {
      plugins: [postcssNesting, autoprefixer],
    },
  },
});
