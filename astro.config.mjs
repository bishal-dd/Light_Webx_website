import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://www.lightwebx.com',
  integrations: [tailwind(), compress(), sitemap(), react()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
