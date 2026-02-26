import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // Button.ts 使用了 DOM API (document.createElement 等)，需要 happy-dom 环境
    environment: 'happy-dom',
    include: ['src/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.{test,spec}.ts'],
    },
  },
});
