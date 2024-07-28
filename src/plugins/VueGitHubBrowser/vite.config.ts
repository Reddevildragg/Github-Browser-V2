// packages/vue-git-hub-browser/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueGitHubBrowser',
      fileName: (format) => `vue-git-hub-browser.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'vue-github-browser.scss';
          return assetInfo.name;
        },
        globals: {
          vue: 'Vue'
        }
      },
    }
  }
});
