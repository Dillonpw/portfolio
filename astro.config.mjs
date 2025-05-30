// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://dillonwalsh.com/",
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

});
