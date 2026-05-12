import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              Nawres<span className="text-primary-500">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Étudiant en Master Business Intelligence spécialisé en Data Analytics et Machine Learning. Je transforme les données brutes en insights actionnables.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/nawreslahmmer" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nawres-lahmmer-4a378133a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nawreslahmmer@gmail.com" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-50 hover:text-primary-500 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Liens rapides</h4>
            <ul className="flex flex-col gap-2">
              <li><NavLink to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Accueil</NavLink></li>
              <li><NavLink to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">À propos</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projets</NavLink></li>
              <li><NavLink to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Compétences</NavLink></li>
              <li><NavLink to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Blog</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Manouba, Tunisie</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:nawreslahmmer@gmail.com" className="hover:text-primary-500 transition-colors">nawreslahmmer@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Nawres Lahmer. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Conçu avec Data & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
