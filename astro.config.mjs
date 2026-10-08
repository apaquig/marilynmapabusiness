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
          'https://marilynmapabusiness.com/politica-de-privacidad/',
          'https://marilynmapabusiness.com/terminos-y-condiciones/',
          'https://marilynmapabusiness.com/en/privacy-policy/',
          'https://marilynmapabusiness.com/en/terms-and-conditions/',
          'https://marilynmapabusiness.com/en/sms-opt-in/',
          'https://marilynmapabusiness.com/citas/',
          'https://marilynmapabusiness.com/en/citas/',
          'https://marilynmapabusiness.com/estatus-juvenil-new-jersey/',
          'https://marilynmapabusiness.com/en/estatus-juvenil-new-jersey/',
          'https://marilynmapabusiness.com/sobre-mapa-business-and-financial-services/',
          'https://marilynmapabusiness.com/es/sobre-mapa-business-and-financial-services/',
          'https://marilynmapabusiness.com/en/about/',
          'https://marilynmapabusiness.com/en/about-mapa-business-and-financial-services/'
        ];
        return !page.includes('/lp/') && !excluded.includes(page);
      }
    })
  ],
  devToolbar: {
    enabled: false
  }
});