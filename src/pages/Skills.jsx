import { LazyMotion, domAnimation, m } from 'framer-motion';
import Code from 'lucide-react/dist/esm/icons/code';
import Database from 'lucide-react/dist/esm/icons/database';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Award from 'lucide-react/dist/esm/icons/award';
import Star from 'lucide-react/dist/esm/icons/star';
import SEO from '../components/utils/SEO';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90, featured: true },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85, featured: true },
      { name: "SQL", level: 95, featured: true },
      { name: "C", level: 75 },
      { name: "R", level: 75 }
    ]
  },
  {
    title: "Business Intelligence & Analytics",
    icon: BarChart,
    skills: [
      { name: "Power BI", level: 95, featured: true },
      { name: "DAX", level: 90, featured: true },
      { name: "Power Query", level: 90, featured: true },
      { name: "Excel", level: 95, featured: true },
      { name: "Pentaho", level: 75 },
      { name: "Tableau", level: 80 }
    ]
  },
  {
    title: "Databases & Data Engineering",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 90, featured: true },
      { name: "MySQL", level: 85 },
      { name: "Oracle", level: 80 },
      { name: "ETL/SSIS", level: 85, featured: true },
      { name: "Data Warehousing", level: 85 },
      { name: "T-SQL", level: 90, featured: true }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: Zap,
    skills: [
      { name: "Machine Learning", level: 85, featured: true },
      { name: "TensorFlow", level: 80 },
      { name: "Scikit-Learn", level: 85, featured: true },
      { name: "Deep Learning", level: 80 },
      { name: "CRISP-DM", level: 85 },
      { name: "Statistical Analysis", level: 85, featured: true }
    ]
  },
  {
    title: "Web Development",
    icon: Layers,
    skills: [
      { name: "React", level: 80, featured: true },
      { name: "Angular", level: 70 },
      { name: "HTML/CSS", level: 90, featured: true },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "Responsive Design", level: 85, featured: true }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Award,
    skills: [
      { name: "Git & GitHub", level: 85, featured: true },
      { name: "Google Colab", level: 90, featured: true },
      { name: "Jupyter Notebook", level: 90, featured: true },
      { name: "Visual Studio", level: 80 },
      { name: "VS Code", level: 90, featured: true },
      { name: "Docker", level: 70 }
    ]
  }
];

const certifications = [
  {
    title: "Data Analysis with Python",
    issuer: "Certification Professionnelle",
    date: "2024"
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Certification Professionnelle",
    date: "2024"
  },
  {
    title: "Machine Learning with Python",
    issuer: "Certification Professionnelle",
    date: "2024"
  }
];

// ---------------- SKILL BAR ----------------
const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {name}
      </span>
      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
        {level}%
      </span>
    </div>

    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
      <m.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
      />
    </div>
  </div>
);

// ---------------- SKILL TAG ----------------
const SkillTag = ({ name, featured }) => (
  <m.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border transition ${
      featured
        ? 'bg-primary-500/15 text-primary-700 dark:text-primary-400 border-primary-200 dark:border-primary-900/50'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700'
    }`}
  >
    {featured && <Star size={14} className="fill-current" />}
    {name}
  </m.div>
);

// ---------------- CATEGORY CARD ----------------
const SkillCategoryCard = ({ category, icon: Icon, skills, delay }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
        <Icon className="text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {category}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <SkillTag key={idx} {...skill} />
      ))}
    </div>
  </m.div>
);

// ---------------- MAIN PAGE ----------------
const Skills = () => {
  return (
    <LazyMotion features={domAnimation}>
      <SEO
        title="Compétences & Certifications"
        description="Compétences de Nawres Lahmer: BI, Data Science, SQL, Power BI, Machine Learning, Web Development."
      />

      <div className="pt-40 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">

          {/* HEADER */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Compétences techniques
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Compétences en BI, Data Science, Machine Learning et Full Stack Development.
            </p>
          </m.div>

          {/* SKILLS GRID */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {skillCategories.map((cat, idx) => (
              <SkillCategoryCard
                key={idx}
                category={cat.title}
                icon={cat.icon}
                skills={cat.skills}
                delay={idx * 0.05}
              />
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-card hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <span className="text-sm text-primary-500 font-semibold">{cert.date}</span>
              </m.div>
            ))}
          </div>

        </div>
      </div>
    </LazyMotion>
  );
};

export default Skills;