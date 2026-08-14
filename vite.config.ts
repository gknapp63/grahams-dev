import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsjson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), devtoolsjson()],
  resolve: {
    tsconfigPaths: true,
  },
});
