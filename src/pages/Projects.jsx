import { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import SEO from '../components/utils/SEO';
import {
  Users2,
  TrendingUp,
  Camera,
  Calendar,
  BookOpen,
  ArrowRight,
  Code2,
  Database,
  Zap,
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'HR Recruitment Dashboard',
    category: 'BI',
    description: 'Dashboard Power BI pour monitorer le recrutement, analyser le pipeline et suivre les indicateurs clés des RH.',
    details: "Développé un dashboard RH complet en Power BI, incluant des KPI temps de recrutement, taux d'acceptation, suivi des candidats et analyse des compétences. J'ai conçu le modèle de données, les mesures DAX et les filtres dynamiques pour un reporting métier clair et actionnable.",
    icon: Users2,
    tech: ['Power BI', 'Power Query', 'Excel', 'DAX'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'Predictive Stock Analysis Dashboard',
    category: 'BI & ML',
    description: 'Projet BI et ML pour analyser les stocks et prédire les besoins grâce à des modèles de prévision basés sur SQL Server.',
    details: "Intégration de données SQL Server, création de pipelines SSIS et déploiement d'un modèle prédictif pour anticiper la demande. Le dashboard combine des tableaux de bord BI et des alertes de stock pour optimiser la chaîne logistique.",
    icon: TrendingUp,
    tech: ['SSIS', 'Power BI', 'SQL Server', 'ML'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    id: 3,
    title: 'Tunisian License Plate Detection',
    category: 'Computer Vision',
    description: "Système de détection de plaques d'immatriculation tunisiennes et utilisation de l'OCR pour la lecture de texte.",
    details: "Développé une solution de vision par ordinateur en Python avec YOLOv8 et OCR pour détecter et lire les plaques tunisiennes. J'ai entraîné le modèle sur un jeu de données local, optimisé les performances et automatisé l'extraction des numéros.",
    icon: Camera,
    tech: ['Python', 'YOLOv8', 'OCR', 'Roboflow'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-purple-600 to-indigo-500',
  },
  {
    id: 4,
    title: 'Event Management Web Application',
    category: 'Full Stack',
    description: "Application web de gestion d'événements avec création de sessions, gestion des inscrits et suivi en temps réel.",
    details: "Conçu une application full-stack pour planifier et gérer des événements, avec des modules utilisateurs, calendriers et notifications. J'ai implémenté les fonctionnalités de création d'événements, l'administration et l'accès sécurisé aux informations.",
    icon: Calendar,
    tech: ['PHP', 'Angular', 'MySQL'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: false,
    gradient: 'from-orange-600 to-red-500',
  },
  {
    id: 5,
    title: 'Library Management System',
    category: 'Backend',
    description: "Système backend Java EE pour gérer les emprunts, les retours et la base de données d'une bibliothèque.",
    details: "Développé une application Java EE avec gestion des utilisateurs, catalogue de livres, emprunts et rapports. J'ai structuré la base MySQL, créé des interfaces JSP et assuré la cohérence des transactions bibliothécaires.",
    icon: BookOpen,
    tech: ['Java EE', 'MySQL', 'JSP'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: false,
    gradient: 'from-pink-600 to-rose-500',
  },
];

const categories = ['All', 'BI', 'BI & ML', 'Computer Vision', 'Full Stack', 'Backend'];

const ProjectCard = ({ icon: Icon, title, category, description, details, tech, featured, gradient, delay }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-500/5 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Header avec gradient et icône */}
      <div
        className={`relative h-32 bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        {/* Effet glassmorphism subtil */}
        <div className="absolute inset-0 backdrop-blur-[40px] opacity-10" />
        
        {/* Icône centrée - optimisé pour le rendu */}
        <div className="absolute inset-0 flex items-center justify-center will-change-transform">
          <Icon className="w-16 h-16 text-white opacity-30 absolute transition-none" strokeWidth={1} aria-hidden="true" />
          <Icon className="w-12 h-12 text-white opacity-90 relative z-10 transition-none" strokeWidth={1.5} aria-hidden="true" />
        </div>

        {/* Accent bar */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-white opacity-30" />
      </div>

      <div className="p-5 md:p-6 flex flex-col h-full">
        {/* Category et Featured badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className={`text-xs uppercase tracking-wider font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-90`}>
            {category}
          </span>
          {featured && (
            <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              Featured
            </span>
          )}
        </div>

        {/* Titre */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-tight mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-6 mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies - compact et optimisé */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 whitespace-nowrap flex-shrink-0"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-auto">
          <button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group/btn"
            aria-expanded={expanded}
            aria-label={expanded ? `Réduire ${title}` : `En savoir plus sur ${title}`}
          >
            {expanded ? 'Moins de détails' : 'Plus de détails'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </button>

          {/* Details expandable - lazy render */}
          <AnimatePresence mode="wait">
            {expanded && (
              <m.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                  {details}
                </p>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <LazyMotion features={domAnimation}>
      <SEO title="Projets" description="Portfolio de projets BI, Data Science et Full Stack Development par Nawres Lahmer" />

      <div className="pt-40 pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Mes projets</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto mb-8" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Projets réels présentant l'expertise en Business Intelligence, Data Engineering, Machine Learning et Full-Stack Development
            </p>
          </m.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((p, i) => (
                <ProjectCard key={p.id} {...p} delay={i * 0.05} />
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </div>
    </LazyMotion>
  );
};

export default Projects;