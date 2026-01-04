import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "tvuikit",
      fileName: (format) => `tvuikit.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
  },
  plugins: [
    tailwindcss(),
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
});