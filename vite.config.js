import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Cible les navigateurs modernes → moins de polyfills
    target: 'es2020',
    // Pas de source maps en prod
    sourcemap: false,
    // CSS split par chunk
    cssCodeSplit: true,
    // esbuild (plus rapide que terser)
    minify: 'esbuild',
    // Ne pas inliner les images (elles ont leur propre cache HTTP)
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem (chargé AVEC Home, car Home n'est plus lazy)
          'react-core':    ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion isolé → lazy loadé avec les pages secondaires
          'framer-motion': ['framer-motion'],
          // react-helmet → utilisé uniquement dans les pages
          'helmet':        ['react-helmet-async'],
        },
      },
    },
  },
  server: {
    hmr: { overlay: false },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
