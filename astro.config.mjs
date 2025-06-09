// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Webアプリ開発 超入門',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
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
