import { defineConfig } from 'vitepress';

export default defineConfig({
  outDir: './dist',
  cacheDir: './node_modules/.vitepress-cache',
  title: 'My Monorepo Docs',
  description: 'Documentation for my monorepo project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Shared Utils', link: '/guide/shared' },
          { text: 'UI Components', link: '/guide/ui' },
        ],
      },
    ],
  },
});
