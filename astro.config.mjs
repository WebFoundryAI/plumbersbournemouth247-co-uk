import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://plumbersbournemouth247.co.uk',
  integrations: [
    sitemap(),
    tailwind(),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
