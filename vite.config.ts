import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueScrollParallax',
      fileName: (format) => `vue-scroll-parallax.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'parallax-controller'],
      output: {
        globals: {
          vue: 'Vue',
          'parallax-controller': 'ParallaxController',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
