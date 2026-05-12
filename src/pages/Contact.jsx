import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Github from 'lucide-react/dist/esm/icons/github';
import Send from 'lucide-react/dist/esm/icons/send';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import SEO from '../components/utils/SEO';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <m.a
    href={href}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all"
  >
    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</p>
      <p className="text-gray-900 dark:text-white font-semibold">{value}</p>
    </div>
  </m.a>
);

const SocialLink = ({ icon: Icon, label, href, color }) => (
  <m.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold transition-all ${color}`}
    title={label}
  >
    <Icon size={22} />
  </m.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <LazyMotion features={domAnimation}>
      <SEO
        title="Me contacter"
        description="Contactez Nawres Lahmer pour des opportunités d'emploi, de stage ou de collaboration en Data Analytics et BI."
      />

      <div className="pt-40 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Restons en contact
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Je suis toujours intéressé par les nouvelles opportunités et les projets intéressants.
            </p>
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-900/30 max-w-2xl mx-auto">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                Actuellement ouvert aux opportunités de stage, projets freelance et collaborations en Business Intelligence, Data Analytics et Data Science.
              </p>
            </div>
          </m.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Cards */}
              <div className="rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-8 bg-gradient-to-br from-primary-500/10 to-blue-500/10 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Me contacter</h3>
                </div>

                <div className="p-8 space-y-2">
                  <ContactInfo
                    icon={Mail}
                    label="Email"
                    value="nawreslahmmer@gmail.com"
                    href="mailto:nawreslahmmer@gmail.com"
                  />
                  <ContactInfo
                    icon={Phone}
                    label="Téléphone"
                    value="+216 23927863"
                    href="tel:+21623927863"
                  />
                  <ContactInfo
                    icon={MapPin}
                    label="Localisation"
                    value="Manouba, Tunisie"
                    href="https://maps.google.com/?q=Manouba,Tunisia"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 p-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Se connecter</h4>
                <div className="flex gap-4">
                  <SocialLink
                    icon={Github}
                    label="GitHub"
                    href="https://github.com/nawreslahmmer"
                    color="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
                  />
                  <SocialLink
                    icon={Linkedin}
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/nawres-lahmmer-4a378133a/"
                    color="bg-[#0A66C2] hover:bg-[#094598]"
                  />
                  <SocialLink
                    icon={Mail}
                    label="Email"
                    href="mailto:nawreslahmmer@gmail.com"
                    color="bg-primary-500 hover:bg-primary-600"
                  />
                </div>
              </div>

              {/* Quick Response Time */}
              <m.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-400 text-sm">
                      Je réponds généralement dans les 24 heures
                    </p>
                  </div>
                </div>
              </m.div>
            </m.div>

            {/* Contact Form */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 p-8 md:p-10">
                {isSubmitted ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <m.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </m.div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message envoyé !</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Merci de m'avoir contacté. Je vous répondrai dès que possible.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom complet"
                        className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre.email@example.com"
                        className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="De quoi s'agit-il ?"
                        className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Parlez-moi de votre opportunité ou de ce que vous aimeriez discuter..."
                        className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all outline-none resize-none"
                      ></textarea>
                    </div>

                    <m.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Envoyer le message
                        </>
                      )}
                    </m.button>
                  </form>
                )}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Contact;

