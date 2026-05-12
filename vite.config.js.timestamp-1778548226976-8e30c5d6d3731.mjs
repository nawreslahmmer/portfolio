// vite.config.js
import { defineConfig } from "file:///C:/Users/Nawres/.gemini/antigravity/scratch/nawres-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Nawres/.gemini/antigravity/scratch/nawres-portfolio/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    // Cible les navigateurs modernes → moins de polyfills
    target: "es2020",
    // Pas de source maps en prod
    sourcemap: false,
    // CSS split par chunk
    cssCodeSplit: true,
    // esbuild (plus rapide que terser)
    minify: "esbuild",
    // Ne pas inliner les images (elles ont leur propre cache HTTP)
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem (chargé AVEC Home, car Home n'est plus lazy)
          "react-core": ["react", "react-dom", "react-router-dom"],
          // Framer Motion isolé → lazy loadé avec les pages secondaires
          "framer-motion": ["framer-motion"],
          // react-helmet → utilisé uniquement dans les pages
          "helmet": ["react-helmet-async"]
        }
      }
    }
  },
  server: {
    hmr: { overlay: false }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOYXdyZXNcXFxcLmdlbWluaVxcXFxhbnRpZ3Jhdml0eVxcXFxzY3JhdGNoXFxcXG5hd3Jlcy1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5hd3Jlc1xcXFwuZ2VtaW5pXFxcXGFudGlncmF2aXR5XFxcXHNjcmF0Y2hcXFxcbmF3cmVzLXBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTmF3cmVzLy5nZW1pbmkvYW50aWdyYXZpdHkvc2NyYXRjaC9uYXdyZXMtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIC8vIENpYmxlIGxlcyBuYXZpZ2F0ZXVycyBtb2Rlcm5lcyBcdTIxOTIgbW9pbnMgZGUgcG9seWZpbGxzXG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICAvLyBQYXMgZGUgc291cmNlIG1hcHMgZW4gcHJvZFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gQ1NTIHNwbGl0IHBhciBjaHVua1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAvLyBlc2J1aWxkIChwbHVzIHJhcGlkZSBxdWUgdGVyc2VyKVxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIC8vIE5lIHBhcyBpbmxpbmVyIGxlcyBpbWFnZXMgKGVsbGVzIG9udCBsZXVyIHByb3ByZSBjYWNoZSBIVFRQKVxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyBSZWFjdCBlY29zeXN0ZW0gKGNoYXJnXHUwMEU5IEFWRUMgSG9tZSwgY2FyIEhvbWUgbidlc3QgcGx1cyBsYXp5KVxuICAgICAgICAgICdyZWFjdC1jb3JlJzogICAgWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgIC8vIEZyYW1lciBNb3Rpb24gaXNvbFx1MDBFOSBcdTIxOTIgbGF6eSBsb2FkXHUwMEU5IGF2ZWMgbGVzIHBhZ2VzIHNlY29uZGFpcmVzXG4gICAgICAgICAgJ2ZyYW1lci1tb3Rpb24nOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICAvLyByZWFjdC1oZWxtZXQgXHUyMTkyIHV0aWxpc1x1MDBFOSB1bmlxdWVtZW50IGRhbnMgbGVzIHBhZ2VzXG4gICAgICAgICAgJ2hlbG1ldCc6ICAgICAgICBbJ3JlYWN0LWhlbG1ldC1hc3luYyddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHsgb3ZlcmxheTogZmFsc2UgfSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbScsICdmcmFtZXItbW90aW9uJ10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvWCxTQUFTLG9CQUFvQjtBQUNqWixPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBO0FBQUEsSUFFUixXQUFXO0FBQUE7QUFBQSxJQUVYLGNBQWM7QUFBQTtBQUFBLElBRWQsUUFBUTtBQUFBO0FBQUEsSUFFUixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLGNBQWlCLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBO0FBQUEsVUFFMUQsaUJBQWlCLENBQUMsZUFBZTtBQUFBO0FBQUEsVUFFakMsVUFBaUIsQ0FBQyxvQkFBb0I7QUFBQSxRQUN4QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSyxFQUFFLFNBQVMsTUFBTTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLG9CQUFvQixlQUFlO0FBQUEsRUFDckU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
