import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Habilita la importación automática de componentes de Vuetify
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias para acceder a la carpeta 'src'
    },
  },
  server: {
    open: true, // Abre el navegador al iniciar el servidor
    port: 3000, // Puerto por defecto
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Cambia esto al URL de tu API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
    sourcemap: true, // Habilita los sourcemaps para facilitar la depuración
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Crea un chunk por cada dependencia
          }
        },
      },
    },
  },
  define: {
    'process.env': {}, // Permite usar variables de entorno
  },
});
