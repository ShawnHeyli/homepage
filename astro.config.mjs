import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/rss": "/rss.xml",
    "/feed": "/rss.xml",
  },
  site: "https://defaultmodel.xyz",
  integrations: [mdx(), sitemap(), tailwind()],
});
