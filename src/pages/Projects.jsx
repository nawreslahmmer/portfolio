import { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import SEO from '../components/utils/SEO';

import projectHR      from '../assets/images/project-hr.webp';
import projectStock   from '../assets/images/project-stock.webp';
import projectVision  from '../assets/images/project-vision.webp';
import projectEvent   from '../assets/images/project-event.webp';
import projectLibrary from '../assets/images/project-library.webp';

const projectsData = [
  {
    id: 1,
    title: 'HR Recruitment Dashboard',
    category: 'BI',
    description: 'Dashboard Power BI pour monitorer le recrutement, analyser le pipeline et suivre les indicateurs clés des RH.',
    details: "Développé un dashboard RH complet en Power BI, incluant des KPI temps de recrutement, taux d'acceptation, suivi des candidats et analyse des compétences. J'ai conçu le modèle de données, les mesures DAX et les filtres dynamiques pour un reporting métier clair et actionnable.",
    image: projectHR,
    tech: ['Power BI', 'Power Query', 'Excel', 'DAX'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Predictive Stock Analysis Dashboard',
    category: 'BI & ML',
    description: 'Projet BI et ML pour analyser les stocks et prédire les besoins grâce à des modèles de prévision basés sur SQL Server.',
    details: "Intégration de données SQL Server, création de pipelines SSIS et déploiement d'un modèle prédictif pour anticiper la demande. Le dashboard combine des tableaux de bord BI et des alertes de stock pour optimiser la chaîne logistique.",
    image: projectStock,
    tech: ['SSIS', 'Power BI', 'SQL Server', 'Machine Learning'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    id: 3,
    title: 'Tunisian License Plate Detection',
    category: 'Computer Vision',
    description: "Système de détection de plaques d'immatriculation tunisiennes et utilisation de l'OCR pour la lecture de texte.",
    details: "Développé une solution de vision par ordinateur en Python avec YOLOv8 et OCR pour détecter et lire les plaques tunisiennes. J'ai entraîné le modèle sur un jeu de données local, optimisé les performances et automatisé l'extraction des numéros.",
    image: projectVision,
    tech: ['Python', 'YOLOv8', 'Arabic OCR', 'Roboflow', 'Google Colab'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: true,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'Event Management Web Application',
    category: 'Full Stack',
    description: "Application web de gestion d'événements avec création de sessions, gestion des inscrits et suivi en temps réel.",
    details: "Conçu une application full-stack pour planifier et gérer des événements, avec des modules utilisateurs, calendriers et notifications. J'ai implémenté les fonctionnalités de création d'événements, l'administration et l'accès sécurisé aux informations.",
    image: projectEvent,
    tech: ['PHP', 'Angular', 'MySQL'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: false,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Library Management System',
    category: 'Backend',
    description: "Système backend Java EE pour gérer les emprunts, les retours et la base de données d'une bibliothèque.",
    details: "Développé une application Java EE avec gestion des utilisateurs, catalogue de livres, emprunts et rapports. J'ai structuré la base MySQL, créé des interfaces JSP et assuré la cohérence des transactions bibliothécaires.",
    image: projectLibrary,
    tech: ['Java EE', 'MySQL', 'JSP'],
    github: 'https://github.com/nawreslahmmer',
    demo: null,
    featured: false,
    gradient: 'from-pink-500 to-rose-400',
  },
];

const categories = ['All', 'BI', 'BI & ML', 'Computer Vision', 'Full Stack', 'Backend'];

const ProjectCard = ({ image, title, category, description, details, tech, featured, gradient, delay }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl dark:hover:shadow-primary-500/10 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />
      <div className="overflow-hidden rounded-3xl">
        <div className="relative h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={720}
            height={320}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

        <div className="p-5 md:p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] uppercase tracking-[0.3em] bg-primary-500/10 text-primary-600 dark:text-primary-300 rounded-full px-3 py-1 font-semibold">
              {category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{featured ? 'En vedette' : 'Projet'}</span>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white leading-tight">
              {title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-7">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em]">
            {tech?.map((t) => (
              <span key={t} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full px-3 py-1 font-semibold">
                {t}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
            <button
              type="button"
              onClick={() => setExpanded((p) => !p)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              aria-expanded={expanded}
              aria-label={expanded ? `Réduire ${title}` : `En savoir plus sur ${title}`}
            >
              {expanded ? 'Voir moins' : 'Voir plus'}
            </button>
            {expanded && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-7">{details}</div>
            )}
          </div>
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