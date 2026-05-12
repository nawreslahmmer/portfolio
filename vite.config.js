import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Cible les navigateurs modernes → moins de polyfills
    target: 'es2020',
    // Pas de source maps en prod
    sourcemap: false,
    // CSS split par chunk
    cssCodeSplit: true,
    // ici l omptimisation seo ou on  a reduit le taille de js pour ameliorer le vitesse de site avec minify  ,,, esbuild (plus rapide que terser) 
    minify: 'esbuild',
    // Ne pas inliner les images (elles ont leur propre cache HTTP)
    assetsInlineLimit: 0, // optimisation seo : evite le fichiers lords dans le js 
    rollupOptions: {
      output: {
        // ici l optimisation de cette fichier on a decouper le js en morceau pour un chargement rapide avec manual chuncks 
        manualChunks: {
          // React ecosystem (chargé AVEC Home, car Home n'est plus lazy)
          'react-core': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion isolé → lazy loadé avec les pages secondaires
          'framer-motion': ['framer-motion'],
          // react-helmet → utilisé uniquement dans les pages
          'helmet': ['react-helmet-async'],
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
