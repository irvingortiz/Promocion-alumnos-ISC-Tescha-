import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://irvingortiz.github.io',
  base: '/Promocion-alumnos-ISC-Tescha-/',

  vite: {
    plugins: [tailwindcss()]
  }
});