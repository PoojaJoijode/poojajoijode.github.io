const projects = [
  {
    title: 'Marketing Campaign ROI and Customer Journey Funnel Analysis',
    category: 'Power BI | SQL | DAX',
    date: 'May 2026',
    description:
      'Built a 4-page Power BI dashboard to analyze campaign spend, revenue, ROAS, CAC, ROI %, funnel conversion, daily trends, and budget recommendations across marketing channels.',
    outcomes: ['4-page executive dashboard', 'Campaign ROI and channel performance', 'Funnel conversion and drop-off insights', 'Budget optimization recommendations'],
    tags: ['Power BI', 'SQL', 'DAX', 'ROAS', 'CAC'],
    link: 'https://github.com/PoojaJoijode'
  },
  {
    title: 'Accident Risk Analytics: US Accidents + Census Population',
    category: 'Python | ML | Data Engineering',
    date: 'January 2026',
    description:
      'Built a Python pipeline to process 3M+ US accident records, integrate Census population data, normalize city and state risk metrics, and prepare clean outputs for reporting and ML.',
    outcomes: ['3M+ accident records processed', '86.6% city-level coverage after enrichment', 'Logistic Regression, Random Forest, and XGBoost compared', 'Best model reached Macro-F1 0.693 and ROC-AUC 0.868'],
    tags: ['Python', 'XGBoost', 'Random Forest', 'ETL', 'Modeling'],
    link: 'https://github.com/PoojaJoijode'
  },
  {
    title: 'VPN / IPSec Error Log Analyzer',
    category: 'Python | NLP | Streamlit | Docker',
    date: 'November 2025',
    description:
      'Created a Python pipeline to parse unstructured VPN/IPSec logs into structured outputs and classify noisy entries for faster operations triage.',
    outcomes: ['TF-IDF + LinearSVC classification', '8 error categories and 3 severity levels', '18 subcategories for triage', 'Streamlit app with upload, filters, CSV export, and Docker deployment'],
    tags: ['Python', 'NLP', 'Streamlit', 'Docker', 'TF-IDF'],
    link: 'https://github.com/PoojaJoijode'
  }
];

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work focused on business impact, ML, and automation.</h2>
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
