import { LazyMotion, domAnimation, m } from 'framer-motion';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Target from 'lucide-react/dist/esm/icons/target';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Award from 'lucide-react/dist/esm/icons/award';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Star from 'lucide-react/dist/esm/icons/star';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Code from 'lucide-react/dist/esm/icons/code';
import SEO from '../components/utils/SEO';
import profileHero from '../assets/images/profile-hero.webp';

const TimelineItem = ({ year, title, subtitle, description, icon: Icon }) => (
  <m.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex gap-6 mb-10"
  >
    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
      <Icon size={20} />
    </div>

    <div className="flex-1">
      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{year}</span>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-0.5">{subtitle}</p>
      <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">{description}</p>
    </div>
  </m.div>
);

const PersonalityTrait = ({ icon: Icon, title, description }) => (
  <m.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="p-4 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-900/30"
  >
    <div className="flex items-start gap-3">
      <Icon className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" size={20} />
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </m.div>
);

const About = () => {
  const timelineEvents = [
    {
      year: "2024 - Maintenant",
      title: "Master en Business Intelligence",
      subtitle: "ISET Rades, Tunisie",
      description: "Spécialisation en processus ETL, Data Warehousing, Analytics avancés, Power BI et Business Intelligence stratégique. Actuellement en première année d'un programme de deux ans axé sur la transformation des données en insights actionnables.",
      icon: GraduationCap
    },
    {
      year: "2024 (Stage)",
      title: "Stagiaire en Business Intelligence",
      subtitle: "CMR Group Tunisie",
      description: "Développement d'un tableau de bord HR interactif en Power BI, analysant les métriques de recrutement, la performance des candidats et les analyses de rétention pour soutenir les décisions RH basées sur les données.",
      icon: Briefcase
    },
    {
      year: "2021 - 2024",
      title: "Licence en Informatique",
      subtitle: "ISTIC (Institut Supérieur d'Informatique et des Techniques de Communication)",
      description: "Diplôme complet en informatique avec des fondations solides en génie logiciel, conception de bases de données, développement web et algorithmes. Diplômé avec une bonne moyenne et une expérience pratique en plusieurs langages de programmation.",
      icon: BookOpen
    }
  ];

  const personalityTraits = [
    {
      title: "Mentalité basée sur les données",
      description: "Je crois que chaque décision doit être appuyée par des données et une analyse claire",
      icon: TrendingUp
    },
    {
      title: "Apprenant continu",
      description: "Passionné par rester à jour avec les dernières tendances en BI, analytics et technologie",
      icon: Star
    },
    {
      title: "Résolveur de problèmes",
      description: "J'aime relever les défis complexes et trouver des solutions élégantes par la logique",
      icon: Zap
    },
    {
      title: "Joueur d'équipe collaboratif",
      description: "Je valorise le travail en équipe et crois que les grands résultats viennent d'une bonne communication",
      icon: Heart
    },
    {
      title: "Orienté vers les détails",
      description: "La précision compte dans le travail avec les données—je me concentre sur la qualité et l'exactitude",
      icon: Code
    },
    {
      title: "Ambitieux et motivé",
      description: "Je m'engage à grandir en tant que professionnel et à fournir l'excellence",
      icon: Award
    }
  ];

  const skillCategories = [
    {
      title: "Business Intelligence & Analytics",
      skills: ["Power BI", "DAX", "Power Query", "Excel Advanced", "Data Visualization", "Dashboard Design"]
    },
    {
      title: "Data Engineering & Databases",
      skills: ["SQL Server", "SSIS (ETL)", "T-SQL", "MySQL", "Oracle", "Data Warehousing"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "C", "R"]
    },
    {
      title: "Machine Learning & Data Science",
      skills: ["Machine Learning", "Statistical Analysis", "TensorFlow", "Scikit-Learn", "Pandas", "CRISP-DM"]
    },
    {
      title: "Web Development",
      skills: ["React", "Angular", "PHP", "Node.js", "HTML/CSS", "Responsive Design"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Google Colab", "Jupyter Notebook", "VS Code", "Docker", "Linux"]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <SEO 
        title="À propos" 
        description="En savoir plus sur Nawres Lahmer, diplômé en informatique et spécialiste en Business Intelligence passionné par la data analytics, les processus ETL et le machine learning." 
      />

      <div className="pt-40 pb-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <div className="mb-24 text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary-500/20 overflow-hidden shadow-lg">
                <img
                  src={profileHero}
                  alt="Nawres Lahmer"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              À propos de moi
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Bonjour, je suis Nawres Lahmer, étudiant en Master Business Intelligence à ISET Rades. Je suis passionné par la Data, le Machine Learning et les systèmes d'information. Je cherche actuellement un stage d'été en Data Analyst ou Business Intelligence.
            </p>
          </div>

          {/* Introduction & Mission */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24 p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-900/30"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mon parcours & ma vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Mon parcours en technologie a commencé par la curiosité de comprendre comment les systèmes fonctionnent, évoluant en une passion profonde pour le Business Intelligence et l'analyse de données. Je crois que les données sont le nouveau pétrole, et ma mission est de déverrouiller son potentiel pour conduire des décisions commerciales significatives.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Avec une expérience pratique en Power BI, processus ETL et machine learning, je suis dédié à devenir un expert Data Analyst et BI Developer capable de combler le fossé entre les solutions techniques et les objectifs commerciaux.
            </p>
          </m.div>

          {/* Timeline */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Formation & Expérience</h2>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} {...event} />
              ))}
            </div>
          </m.div>

          {/* Career Objectives */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Objectifs de carrière</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <Target className="text-primary-500 mb-4" size={28} />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Court terme</h3>
                <p className="text-gray-600 dark:text-gray-400">Décrocher un stage d'été pour acquérir une expérience pratique en Business Intelligence et appliquer mes connaissances dans un environnement professionnel.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <Briefcase className="text-primary-500 mb-4" size={28} />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Moyen terme</h3>
                <p className="text-gray-600 dark:text-gray-400">Décrocher mon premier emploi comme Data Analyst ou BI Developer, où je peux contribuer à des projets de transformation commerciale significatifs.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <TrendingUp className="text-primary-500 mb-4" size={28} />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Long terme</h3>
                <p className="text-gray-600 dark:text-gray-400">Devenir un expert reconnu en Business Intelligence et Data Engineering, conduisant les stratégies basées sur les données au niveau organisationnel.</p>
              </div>
            </div>
          </m.div>

          {/* Skills */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Technologies & Compétences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg border border-primary-200 dark:border-primary-900/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Personal Qualities */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Qualités personnelles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {personalityTraits.map((trait, index) => (
                <PersonalityTrait key={index} {...trait} />
              ))}
            </div>
          </m.div>

          {/* Interests */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Intérêts & Passions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Intérêts professionnels</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Business Intelligence & Data Analytics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> ETL & Data Engineering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Machine Learning & Predictive Analytics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Data Visualization & Dashboard Design
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Intérêts personnels</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Explorer les technologies émergentes en AI & ML
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Lire sur la stratégie commerciale & les tendances du marché
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Projets open-source & contribution communautaire
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">▸</span> Réseauter avec les professionnels en tech & data
                  </li>
                </ul>
              </div>
            </div>
          </m.div>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-blue-500/10 border border-primary-500/30 dark:border-primary-500/20"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Je suis actuellement ouvert aux opportunités de stage, projets freelance et collaborations en Business Intelligence, Data Analytics et Data Science.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              Me contacter
            </a>
          </m.div>

        </div>
      </div>
    </LazyMotion>
  );
};

export default About;