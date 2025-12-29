import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      rollupTypes: true,
      copyDtsFiles: false, // 禁用复制分散的 .d.ts 文件，合并到单个文件
      staticImport: true,
      clearPureImport: true,
      include: ['src/**/*'],
    }),
  ],
  build: {
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vue3BestUI',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', '@bingwu-my-monorepo/shared'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 保留 CSS
        assetFileNames: 'style.css',
      },
    },
  },
});
