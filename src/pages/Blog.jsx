import { useNavigate } from 'react-router-dom';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import SEO from '../components/utils/SEO';
import { blogArticles } from '../data/blogArticles';

const Blog = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <LazyMotion features={domAnimation}>
      <SEO 
        title="Blog & Articles" 
        description="Articles sur l'analyse de données, Power BI, Machine Learning et Data Engineering par Nawres Lahmer."
      />

      <div className="pt-32 pb-20 px-4 md:px-6 container mx-auto min-h-screen">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog & Insights</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Partageant mon parcours d'apprentissage, des tutoriels techniques et des insights sur la data, l'IA et le business intelligence.
            </p>
          </div>

          <div className="grid gap-12">
            {blogArticles.map((post, idx) => (
              <m.button
                key={post.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                viewport={{ once: true }}
                onClick={() => handleReadMore(post.id)}
                className="glass-card rounded-[32px] overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 text-left"
                aria-label={`Lire l'article ${post.title}`}
              >
                <div className="md:flex">
                  <div className={`md:w-2/5 h-72 md:h-auto relative bg-gradient-to-br ${post.color} overflow-hidden`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={288}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-800 dark:text-white flex items-center gap-2 shadow-lg">
                      <BookOpen size={14} /> {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary-500" /> {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-primary-500" /> {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group/btn">
                        <span>Lire la suite</span>
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </m.button>
            ))}
          </div>
          
        </div>
      </div>
    </LazyMotion>
  );
};

export default Blog;
