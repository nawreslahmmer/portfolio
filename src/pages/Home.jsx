import { Link } from 'react-router-dom';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import Database from 'lucide-react/dist/esm/icons/database';
import BrainCircuit from 'lucide-react/dist/esm/icons/brain-circuit';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import profileHero from '../assets/images/profile-hero.webp';

// ─── Stats (CSS animation, ZÉRO framer-motion) ───────────────────────────────
const StatsCounter = ({ value, label, icon: Icon }) => (
  <div className="text-center animate-fade-up">
    <div className="flex justify-center mb-2">
      <Icon className="text-primary-500" size={24} />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</div>
  </div>
);

// ─── Project Card (CSS animation, ZÉRO framer-motion) ────────────────────────
const FeaturedProjectCard = ({ title, category, description, tech, gradient }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary-500/10">
    <div className={`absolute top-0 right-0 w-40 h-40 ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-3xl`} aria-hidden="true" />
    <div className="relative p-8">
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full">
          {category}
        </span>
        <ArrowRight className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" size={20} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-400 rounded-md font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: 'HR Recruitment Dashboard',
    category: 'Power BI',
    description: 'Interactive dashboard for recruitment monitoring and candidate analysis developed during internship at CMR Group Tunisie.',
    tech: ['Power BI', 'Power Query', 'Excel', 'DAX'],
    gradient: 'bg-blue-500',
  },
  {
    title: 'Predictive Stock Analysis',
    category: 'BI & ML',
    description: 'SSIS and Power BI integration with Machine Learning models for stock level prediction and analysis.',
    tech: ['SSIS', 'Power BI', 'SQL Server', 'ML'],
    gradient: 'bg-emerald-500',
  },
  {
    title: 'License Plate Detection',
    category: 'Computer Vision',
    description: 'YOLOv8-based system detecting Tunisian license plates and seatbelt usage with Arabic OCR.',
    tech: ['Python', 'YOLOv8', 'OCR', 'Google Colab'],
    gradient: 'bg-purple-500',
  },
];

const Home = () => (
  <>
    {/* SEO inline dans index.html — pas de react-helmet sur Home */}

    {/* ─── HERO — ZÉRO animation, rendu immédiat ──────────────────────────── */}
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center">

        {/* ✅ LCP : image sans wrapper animé */}
        <div className="mb-10">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full p-1 border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-50 dark:bg-gray-900">
              <img
                src={profileHero}
                alt="Photo de profil de Nawres Lahmer"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
              />
            </div>
          </div>
        </div>

        {/* ✅ H1 — PAS d'animation, rendu immédiat */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
          Bonjour, je suis{' '}
          <span className="text-primary-500">Nawres&nbsp;Lahmer</span>
        </h1>

        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal mb-4">
          Étudiant en Master Business Intelligence à ISET Rades, spécialisé en{' '}
          <strong className="font-semibold text-gray-700 dark:text-gray-300">Data Analytics</strong>,{' '}
          <strong className="font-semibold text-gray-700 dark:text-gray-300">Data Engineering</strong> et{' '}
          <strong className="font-semibold text-gray-700 dark:text-gray-300">Machine Learning</strong>.
        </h2>

        <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-10">
          Je recherche actuellement un stage d'été en Data Analyst / Business Intelligence / Data Science.
        </p>

        {/* CTA — CSS transition uniquement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-sm"
          >
            Voir mes projets
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] shadow-sm"
          >
            Me contacter
          </Link>
        </div>

      </div>
    </section>

    {/* ─── Stats ───────────────────────────────────────────────────────────── */}
    <section className="py-24 px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCounter value="5+" label="Projets réalisés" icon={BarChart3} />
          <StatsCounter value="6+" label="Domaines technologiques" icon={Database} />
          <StatsCounter value="15+" label="Technologies maîtrisées" icon={BrainCircuit} />
          <StatsCounter value="2024" label="Début du parcours BI" icon={TrendingUp} />
        </div>
      </div>
    </section>

    {/* ─── Featured Projects ────────────────────────────────────────────────── */}
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets vedettes
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto mb-6" aria-hidden="true" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mise en avant de mes travaux en Business Intelligence, Data Engineering et Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors hover:gap-3"
          >
            Voir tous les projets <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    {/* ─── CTA Section ──────────────────────────────────────────────────────── */}
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-primary-500/5 to-blue-500/5 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Prêt à collaborer&nbsp;?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Je suis enthousiaste à propos des opportunités de stage et des collaborations en Business Intelligence, Data Analytics et Data Science. Créons quelque chose d'extraordinaire ensemble.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            Commencer une conversation <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href="https://www.linkedin.com/in/nawres-lahmmer-4a378133a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white dark:bg-dark-card border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md hover:-translate-y-0.5"
          >
            Me connecter sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
