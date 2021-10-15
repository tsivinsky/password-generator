import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
const { typescript, scss } = sveltePreprocess;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname + "/src",
  publicDir: __dirname + "/public",
  build: {
    outDir: __dirname + "/dist",
  },
  plugins: [svelte({ preprocess: [typescript(), scss()] })],
});
