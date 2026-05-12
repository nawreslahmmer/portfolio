import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Sun from 'lucide-react/dist/esm/icons/sun';
import Moon from 'lucide-react/dist/esm/icons/moon';
import Database from 'lucide-react/dist/esm/icons/database';
// ✅ Plus de framer-motion dans la Navbar → retire 61 KB gzip du bundle initial

const navLinks = [
  { name: 'Accueil',      path: '/' },
  { name: 'À propos',     path: '/about' },
  { name: 'Projets',      path: '/projects' },
  { name: 'Compétences',  path: '/skills' },
  { name: 'Blog',         path: '/blog' },
  { name: 'Contact',      path: '/contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    if (!isOpen) return;
    const close = (e) => {
      if (!e.target.closest('header')) setIsOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-500 rounded-lg text-white group-hover:bg-primary-600 transition-colors">
              <Database size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Nawres<span className="text-primary-500">.</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary-500 ${
                        isActive
                          ? 'text-primary-500 relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-500'
                          : 'text-gray-600 dark:text-gray-300'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label={darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label={darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="text-gray-900 dark:text-white p-1"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* ✅ Mobile Nav — CSS transition (grid rows), ZÉRO framer-motion */}
      <nav
        id="mobile-nav"
        aria-label="Navigation mobile"
        className={`md:hidden glass border-t border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-4 py-6 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-500'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
