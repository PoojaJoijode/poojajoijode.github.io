const skillGroups = [
  {
    title: 'Analytics & BI',
    skills: [
      'Power BI',
      'DAX',
      'Power Query',
      'Drill-throughs',
      'Slicers',
      'Tableau',
      'Excel',
      'Pivot Tables',
      'VLOOKUP',
      'Conditional Formatting',
      'Data Visualization',
      'Statistical Analysis',
      'A/B Testing',
      'Ad Hoc Reporting',
      'Executive Reporting'
    ]
  },
  {
    title: 'SQL & Data',
    skills: [
      'SQL',
      'CTEs',
      'Window Functions',
      'Joins',
      'Aggregations',
      'Subqueries',
      'MySQL',
      'Data Modeling',
      'ETL Pipelines',
      'Data Validation',
      'Data Cleaning',
      'Data Quality'
    ]
  },
  {
    title: 'Programming & Engineering',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SciPy',
      'scikit-learn',
      'Matplotlib',
      'Seaborn',
      'R',
      'REST APIs',
      'Web Scraping',
      'Streamlit',
      'CI/CD',
      'Agile',
      'Scrum'
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'Spark',
      'PySpark',
      'Hadoop',
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub',
      'Linux',
      'CLI Tools'
    ]
  },
  {
    title: 'Networking & Technical Support',
    skills: [
      'TCP/IP',
      'HTTP',
      'TLS/SSL',
      'DNS',
      'SSH',
      'Linux CLI',
      'Remote Troubleshooting',
      'Debugging',
      'Log Analysis',
      'Incident Triage',
      'SLA Management',
      'Ticketing Workflows'
    ]
  },
  {
    title: 'Support & Collaboration',
    skills: [
      'Root Cause Analysis',
      'Technical Documentation',
      'Jira',
      'Confluence',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
      'Requirements Gathering',
      'Customer-facing Communication',
      'Process Mapping',
      'Gap Analysis',
      'KPI Definition'
    ]
  }
];

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading centered">
        <p className="eyebrow">Skills</p>
        <h2>A support-ready analytics skill set across BI, SQL, Python, troubleshooting, documentation, and product workflows.</h2>
      </div>

      <div className="skill-grid skill-grid-expanded">
        {skillGroups.map((group) => (
          <article className="content-card skill-card interactive-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="pill-wrap">
              {group.skills.map((skill) => (
                <span className="pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
