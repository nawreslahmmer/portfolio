// Blog articles data - shared between Blog.jsx and BlogPost.jsx
import articleStock from '../assets/images/article-stock.webp';
import articleRecruitment from '../assets/images/article-recruitment.webp';
import articleFabric from '../assets/images/article-fabric.webp';
import articleSnowflake from '../assets/images/article-snowflake.webp';
import logoFabric from '../assets/images/logo-fabric.webp';
import logoSnowflake from '../assets/images/logo-snowflake.webp';

export const blogArticles = [
  {
    id: 1,
    title: "Optimisation de la Gestion des Stocks chez CMR Group : Une Approche Intégrée BI et Prédictive",
    excerpt: "Découvrez comment j'ai conçu un système complet d'optimisation des stocks en combinant SSIS, SQL Server, Power BI et Machine Learning.",
    date: "15 décembre 2024",
    readTime: "15 min lecture",
    category: "Business Intelligence",
    color: "from-blue-400 to-indigo-500",
    image: articleStock,
    content: `
    <h2>Contexte du projet</h2>
    <p>Lors de mon stage chez CMR Group Tunisie, j'ai développé une solution data-driven pour optimiser la gestion des stocks, réduire les coûts et améliorer la disponibilité produit.</p>

    <h2>Architecture technique</h2>
    <p>La solution s'appuie sur une chaîne BI complète :</p>
    <ul>
      <li><strong>Sources opérationnelles</strong> : ERP, inventaires et ventes.</li>
      <li><strong>ETL</strong> : SSIS pour l'extraction, la transformation et le chargement des données.</li>
      <li><strong>Data Warehouse</strong> : SQL Server modèle en étoile pour un reporting performant.</li>
      <li><strong>Visualisation</strong> : Power BI pour des KPIs synthétiques et des analyses interactives.</li>
      <li><strong>Machine Learning</strong> : prévision de la demande et recommandations automatisées.</li>
    </ul>

    <h2>Phases clés</h2>
    <ul>
      <li><strong>Exploration</strong> : analyse des tendances saisonnières et des anomalies.</li>
      <li><strong>Modélisation</strong> : conception du schéma dimensionnel.</li>
      <li><strong>Développement</strong> : pipelines SSIS robustes avec suivi des erreurs.</li>
      <li><strong>Dashboard</strong> : indicateurs de performance, alertes et simulation de stock.</li>
      <li><strong>ML</strong> : modèle de prévision de la demande entraîné sur l'historique.</li>
    </ul>

    <h2>Résultats obtenus</h2>
    <ul>
      <li>Réduction des coûts de stockage de 20 %.</li>
      <li>Diminution des ruptures de stock de 35 %.</li>
      <li>Précision des prévisions portée à 92 %.</li>
      <li>Automatisation complète de la génération de rapports.</li>
    </ul>

    <h2>Valeur métier</h2>
    <p>Cette réalisation a permis de transformer des données disparates en décisions opérationnelles, en offrant une visibilité claire sur les niveaux de stock et les besoins futurs.</p>
    `
  },
  {
    id: 2,
    title: "Conception d'un Tableau de Bord Power BI pour le Suivi des Recrutements",
    excerpt: "Guide complet sur la création d'un dashboard RH professionnel avec Power BI, Power Query et modélisation en étoile.",
    date: "8 décembre 2024",
    readTime: "12 min lecture",
    category: "Power BI",
    color: "from-emerald-400 to-teal-500",
    image: articleRecruitment,
    content: `
    <h2>Vue d'ensemble</h2>
    <p>Un dashboard RH bien conçu facilite le pilotage des recrutements et la mesure des performances du processus de sélection.</p>

    <h2>Architecture du dashboard</h2>
    <ul>
      <li><strong>Overview</strong> : KPIs clés, temps moyen de recrutement et taux d'acceptation.</li>
      <li><strong>Pipeline</strong> : suivi des candidatures à chaque étape du processus.</li>
      <li><strong>Profil</strong> : analyse des compétences, des départements et des origines.</li>
      <li><strong>Tendances</strong> : prévisions et comparaison des périodes.</li>
    </ul>

    <h2>Technologies utilisées</h2>
    <ul>
      <li><strong>Power Query</strong> : préparation et nettoyage des données.</li>
      <li><strong>Modélisation</strong> : structure en étoile optimisée pour des mesures rapides.</li>
      <li><strong>DAX</strong> : indicateurs métier dynamiques et analyses avancées.</li>
      <li><strong>Power BI</strong> : conception d'une expérience interactive et responsive.</li>
    </ul>

    <h2>Fonctionnalités clés</h2>
    <ul>
      <li>Filtres dynamiques par département, niveau et statut.</li>
      <li>Visualisations interactives : graphiques, matrices et cartes.</li>
      <li>Drill-through pour accéder aux détails des candidats.</li>
      <li>Reporting automatisé et partage sécurisé.</li>
    </ul>

    <h2>Résultats</h2>
    <p>Le tableau de bord a amélioré la visibilité des recrutements, réduit les délais de prise de décision et renforcé l'efficacité des équipes RH.</p>
    `
  },
  {
    id: 3,
    title: "Implémenter un Lakehouse avec Microsoft Fabric",
    excerpt: "Architecture moderne et unifiée pour l'analytics. Découvrez OneLake, les Dataflows et la puissance du Direct Lake.",
    date: "Mai 2026",
    readTime: "14 min lecture",
    category: "Data Engineering",
    color: "from-purple-400 to-pink-500",
    image: articleFabric,
    logo: logoFabric,
    content: `
    <h2>Présentation de Microsoft Fabric</h2>
    <p>Microsoft Fabric est une plateforme unifiée pour l'analytics, la BI, le data engineering et la data science. Elle permet de piloter un Lakehouse moderne avec une gouvernance centralisée.</p>

    <h2>Composants essentiels</h2>
    <ul>
      <li><strong>OneLake</strong> : stockage unifié centralisé pour tous les workloads.</li>
      <li><strong>Lakehouses</strong> : structure de données maîtrisée pour analytics.</li>
      <li><strong>Dataflows Gen2</strong> : ingestion et transformation visuelle des données.</li>
      <li><strong>Spark</strong> : traitement distribué scalable pour le big data.</li>
      <li><strong>SQL Endpoint</strong> : accès SQL natif aux datasets.</li>
      <li><strong>Direct Lake</strong> : reporting Power BI en temps réel sans duplication.</li>
    </ul>

    <h2>Architecture recommandée</h2>
    <p>Une approche Bronze/Silver/Gold garantit une montée en puissance progressive :</p>
    <ul>
      <li><strong>Bronze</strong> : données brutes chargées dans OneLake.</li>
      <li><strong>Silver</strong> : nettoyage, enrichment et modélisation.</li>
      <li><strong>Gold</strong> : datasets métiers prêts pour l'analytics.</li>
    </ul>

    <h2>Bénéfices pour les équipes BI</h2>
    <ul>
      <li>Uniformité des données entre l'ingestion et le reporting.</li>
      <li>Réduction du temps de préparation avec des pipelines réutilisables.</li>
      <li>Visibilité en temps réel grâce à Direct Lake.</li>
      <li>Collaboration entre data engineers, analystes et data scientists.</li>
    </ul>

    <h2>Bonne pratique</h2>
    <ul>
      <li>Standardisez les schémas et les noms de tables dans OneLake.</li>
      <li>Documentez vos datasets et vos pipelines.</li>
      <li>Surveillez les performances avec des logs et des métriques.</li>
      <li>Appliquez une gouvernance stricte pour les accès aux données.</li>
    </ul>
    `
  },
  {
    id: 4,
    title: "Snowflake : L'Architecture Révolutionnaire de l'Entrepôt de Données Cloud",
    excerpt: "Explorez l'architecture cloud-native qui redéfinit les data warehouses. Séparation stockage/calcul, Virtual Warehouses et Time Travel.",
    date: "Mai 2026",
    readTime: "13 min lecture",
    category: "Cloud Data Warehouse",
    color: "from-cyan-400 to-blue-500",
    image: articleSnowflake,
    logo: logoSnowflake,
    content: `
    <h2>Pourquoi Snowflake?</h2>
    <p>Snowflake propose une architecture cloud-native qui sépare stockage et calcul, permettant une flexibilité optimale et une facturation à l'usage.</p>

    <h2>Architecture fondamentale</h2>
    <ul>
      <li><strong>Cloud Infrastructure</strong> : disponible sur AWS, Azure et GCP.</li>
      <li><strong>Storage Layer</strong> : stockage optimisé et sécurisé des fichiers de données.</li>
      <li><strong>Compute Layer</strong> : Virtual Warehouses isolés pour des charges indépendantes.</li>
    </ul>

    <h2>Fonctionnalités clés</h2>
    <ul>
      <li><strong>Virtual Warehouses</strong> : montée en puissance automatique en fonction de la charge.</li>
      <li><strong>Time Travel</strong> : restaurer les données à un point antérieur.</li>
      <li><strong>Zero-copy cloning</strong> : créer des copies instantanées sans coût de stockage additionnel.</li>
      <li><strong>Data Sharing</strong> : partager des données en toute sécurité entre organisations.</li>
    </ul>

    <h2>Cas d'usage BI</h2>
    <ul>
      <li>Reporting temps réel et analytics à haute volumétrie.</li>
      <li>Environnements partagés pour data science et machine learning.</li>
      <li>Stockage centralisé et gouvernance unifiée.</li>
      <li>Intégration naturelle avec Power BI et outils BI.</li>
    </ul>

    <h2>Conseils d'optimisation</h2>
    <ul>
      <li>Activez l'auto-suspend pour optimiser les coûts.</li>
      <li>Utilisez le clustering pour améliorer les performances de requête.</li>
      <li>Surveillez l'utilisation des crédits et les charges des warehouses.</li>
      <li>Privilégiez les vues sécurisées pour les données sensibles.</li>
    </ul>
    `
  }
];

export const getBlogArticle = (id) => {
  return blogArticles.find(article => article.id === parseInt(id));
};

export const getBlogExcerpt = (id) => {
  const article = getBlogArticle(id);
  return article ? article.excerpt : null;
};
