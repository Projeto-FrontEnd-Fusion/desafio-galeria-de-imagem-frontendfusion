import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import compression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    compression(),  // Atualize aqui
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    ViteImageOptimizer({
      includePublic: true,  // otimize imagens na pasta public
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
    visualizer({
      open: true, // Para abrir automaticamente o relatório após o build
      filename: 'dist/stats.html', // Nome do arquivo de saída
      template: 'sunburst', // Voc // abrir automaticamente após a construção
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
});
