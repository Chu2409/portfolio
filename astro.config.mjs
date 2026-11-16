// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://chuer.netlify.app",
  compressHTML: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-EC", en: "en-US" } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
