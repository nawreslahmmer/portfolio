import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type = 'website', url = '', image = '' }) => {
  const siteTitle = 'Nawres Lahmer | Data Analyst & BI Developer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = "Portfolio of Nawres Lahmer, a Computer Science student specialized in Business Intelligence, Data Analysis, and Machine Learning. Skilled in Power BI, SQL, and Python.";
  const metaDescription = description || defaultDesc;
  const siteUrl = 'https://nawres-portfolio.vercel.app'; // Replace with actual domain
  const fullUrl = `${siteUrl}${url}`;

  // Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nawres Lahmer",
    "jobTitle": "Data Analyst & BI Developer",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/nawreslahmer", // Update with actual link
      "https://linkedin.com/in/nawreslahmer" // Update with actual link
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {image && <meta property="twitter:image" content={`${siteUrl}${image}`} />}

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
