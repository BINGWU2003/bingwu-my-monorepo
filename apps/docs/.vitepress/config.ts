import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

export default defineConfig({
  outDir: './dist',
  cacheDir: './node_modules/.vitepress-cache',
  title: 'My Monorepo Docs',
  description: 'Documentation for my monorepo project',
  vite: {
    resolve: {
      alias: {
        '@bingwu-my-monorepo/vue3-best-ui': fileURLToPath(
          new URL('../../../packages/vue3-best-ui/src/index.ts', import.meta.url)
        ),
      },
    },
  },
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
