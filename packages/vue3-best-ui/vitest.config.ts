import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // 只测试纯 TS 工具函数/类型，不测试 .vue 组件
    environment: 'node',
    include: ['src/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      // 只统计 .ts 文件的覆盖率，排除 .vue 文件
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.{test,spec}.ts'],
    },
  },
});
