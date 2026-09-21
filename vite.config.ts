import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    // Keep SSR helpers with their consumers to avoid circular chunk initialization.
    nitro({ inlineDynamicImports: true }),
    viteReact(),
  ],
});
