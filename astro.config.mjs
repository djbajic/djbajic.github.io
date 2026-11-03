// @ts-check
import { defineConfig } from 'astro/config';

// When the site replaces djbajic.github.io, keep `site` as is and remove `base`.
export default defineConfig({
  site: 'https://djbajic.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
