import { useParams, useNavigate } from 'react-router-dom';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Tag from 'lucide-react/dist/esm/icons/tag';
import SEO from '../components/utils/SEO';
import { getBlogArticle } from '../data/blogArticles';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getBlogArticle(id);

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/blog');
    }
  };

  if (!article) {
    return (
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto min-h-screen text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Article non trouvé</h1>
        <button
          onClick={handleBack}
          type="button"
          className="mt-6 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Retour au blog
        </button>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <SEO title={article.title} description={article.excerpt} />

      <div className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back Button */}
          <m.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            type="button"
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold mb-8 transition-colors"
            aria-label="Retour au blog"
          >
            <ArrowLeft size={20} /> Retour au blog
          </m.button>

          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-bold flex items-center gap-1">
                <Tag size={12} /> {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-primary-500" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-primary-500" />
                {article.readTime}
              </span>
            </div>

            {article.excerpt && (
              <p className="mt-6 max-w-3xl text-base text-gray-700 dark:text-gray-300">
                {article.excerpt}
              </p>
            )}
          </m.div>

          {article.logo && (
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-gray-100/90 dark:bg-white/10 px-4 py-2 border border-gray-200 dark:border-gray-700 shadow-sm">
              <img
                src={article.logo}
                alt={`${article.title} logo`}
                width={40}
                height={40}
                loading="lazy"
                className="w-10 h-10 rounded-xl object-contain bg-white/90"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Logo officiel</span>
            </div>
          )}

          {/* Featured Image */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mb-12 rounded-[32px] overflow-hidden h-80 md:h-[420px] relative shadow-2xl"
          >
            <img
              src={article.image}
              alt={article.title}
              width={1200}
              height={720}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <article className="glass-card rounded-[32px] p-8 md:p-12 space-y-8">
              <div
                className="text-gray-700 dark:text-gray-300 leading-relaxed article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </m.div>

          {/* Call to Action */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Vous avez d&apos;autres questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              N&apos;hésitez pas à me contacter pour discuter de sujets liés à la Data, BI ou Data Science.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Me contacter
            </button>
          </m.div>

          {/* Navigation Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => navigate('/blog')}
              className="w-full md:w-auto px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              ← Voir tous les articles
            </button>
          </div>

        </div>
      </div>
    </LazyMotion>
  );
};

export default BlogPost;
