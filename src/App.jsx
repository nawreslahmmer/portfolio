import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

// Layout (synchrones — légers)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// ✅ Home chargée SANS lazy → LCP immédiat, PAS de Suspense waterfall
import Home from './pages/Home';

// ✅ Toutes les autres pages lazy-loadées
//    → framer-motion et helmet ne chargent PAS sur la Home
const About    = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills   = lazy(() => import('./pages/Skills'));
const Blog     = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact  = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" aria-label="Chargement…">
    <div className="w-10 h-10 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    // ❌ Plus de LazyMotion ici → framer-motion n'est plus dans le bundle initial
    // ✅ LazyMotion est importé dans chaque page lazy qui en a besoin
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text">

        {/* Décors flous arrière-plan (CSS only, pas de JS) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[10%] -left-[10%] w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-[20%] -right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-[20%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-60" />
        </div>

        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} />

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/about"     element={<About />} />
              <Route path="/projects"  element={<Projects />} />
              <Route path="/skills"    element={<Skills />} />
              <Route path="/blog"      element={<Blog />} />
              <Route path="/blog/:id"  element={<BlogPost />} />
              <Route path="/contact"   element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
