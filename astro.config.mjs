// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marilynmapabusiness.com',
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude redirect pages and non-canonical duplicate aliases
        const excluded = [
          'https://marilynmapabusiness.com/citas/',
          'https://marilynmapabusiness.com/en/citas/',
          'https://marilynmapabusiness.com/sobre-mapa-business-and-financial-services/',
          'https://marilynmapabusiness.com/es/sobre-mapa-business-and-financial-services/',
          'https://marilynmapabusiness.com/en/about/',
          'https://marilynmapabusiness.com/en/about-mapa-business-and-financial-services/'
        ];
        return !excluded.includes(page);
      }
    })
  ],
  devToolbar: {
    enabled: false
  }
});