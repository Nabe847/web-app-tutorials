// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Webアプリ開発 超入門',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Nabe847/web-app-tutorials',
        },
      ],
      sidebar: [
        {
          label: '導入',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'はじめに', slug: 'guides/intro' },
          ],
        },
        {
          label: 'Next.js チュートリアル',
          autogenerate: { directory: 'next' },
        },
        {
          label: 'FastAPI チュートリアル',
          autogenerate: { directory: 'fast-api' },
        },
        {
          label: 'フルスタックWebアプリ超入門',
          autogenerate: { directory: 'full-stack' },
        },
      ],
    }),
  ],
});
