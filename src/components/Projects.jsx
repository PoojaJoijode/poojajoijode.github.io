const projects = [
  {
    title: 'Marketing Campaign ROI and Customer Journey Funnel Analysis',
    category: 'Power BI | SQL | DAX | Stakeholder Reporting',
    date: 'May 2026',
    description:
      'Built SQL analytics tables and Power BI dashboards to calculate spend, revenue, ROAS, CAC, ROI %, and funnel conversion across 50K+ customer journey records.',
    outcomes: [
      'Used CTEs, window functions, joins, and aggregations to create reusable analytics tables.',
      'Performed cohort analysis and customer segmentation to identify funnel drop-off stages.',
      'Designed reusable DAX measures and stakeholder-ready reporting views for decision support.'
    ],
    tags: ['Power BI', 'SQL', 'DAX', 'CTEs', 'Stakeholder Reporting'],
    link: 'https://github.com/PoojaJoijode'
  },
  {
    title: 'Accident Risk Analytics: US Accidents + Census Population',
    category: 'Python | Data Engineering | ML | Documentation',
    date: 'January 2026',
    description:
      'Engineered a Python data pipeline to ingest, validate, and enrich 3M+ accident records with Census data for geographic risk analysis and model development.',
    outcomes: [
      'Performed schema validation, data cleansing, feature engineering, and exploratory analysis.',
      'Reached 86.6% city-level coverage after Census enrichment.',
      'Trained Logistic Regression, Random Forest, and XGBoost models with 0.868 ROC-AUC.',
      'Documented data dictionary and model evaluation metrics for reproducibility.'
    ],
    tags: ['Python', 'ETL', 'Data Validation', 'XGBoost', 'EDA'],
    link: 'https://github.com/PoojaJoijode'
  },
  {
    title: 'VPN / IPSec Error Log Analyzer',
    category: 'Technical Support | Log Analysis | NLP | Docker',
    date: 'November 2025',
    description:
      'Developed a troubleshooting-focused Python pipeline to parse noisy VPN/IPSec logs, classify errors, and support faster incident triage and escalation routing.',
    outcomes: [
      'Parsed unstructured VPN/IPSec error logs into structured outputs for defect investigation.',
      'Built a TF-IDF + LinearSVC model across 8 error categories, 3 severity levels, and 18 subcategories.',
      'Created a Streamlit dashboard with upload, filtered views, and CSV export for non-technical users.',
      'Wrote troubleshooting runbooks and error taxonomy documentation to reduce mean time to resolution.'
    ],
    tags: ['Log Analysis', 'Incident Triage', 'Python', 'Streamlit', 'Docker'],
    link: 'https://github.com/PoojaJoijode'
  }
];

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work connecting analytics, automation, troubleshooting, and product-support thinking.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card content-card interactive-card" key={project.title}>
            <div className="project-topline">
              <span className="project-number">0{index + 1}</span>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="card-cta" href={project.link} target="_blank" rel="noreferrer">
              View Repository
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
