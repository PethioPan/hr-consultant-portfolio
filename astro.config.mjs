import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pethiopan.github.io',
  base: '/hr-consultant-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});