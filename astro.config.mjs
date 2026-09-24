// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://stemaks-plomberie.vercel.app',
  redirects: {
    '/a-propos': '/about',
    '/zones-intervention': '/locations',
  }
});
