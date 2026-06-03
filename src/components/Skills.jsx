const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'Pandas', 'NumPy', 'SciPy', 'scikit-learn', 'SQL', 'R']
  },
  {
    title: 'Data Engineering',
    skills: ['ETL', 'Data Pipelines', 'Data Modeling', 'Data Cleaning', 'Data Validation', 'REST APIs']
  },
  {
    title: 'Machine Learning / AI',
    skills: ['NLP', 'RAG', 'LLMs', 'Neural Networks', 'Classification Models', 'Feature Engineering', 'Model Evaluation']
  },
  {
    title: 'BI & Reporting',
    skills: ['Power BI', 'Tableau', 'DAX', 'KPI Reporting', 'Excel']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Spark', 'PySpark', 'MySQL', 'Hadoop', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Streamlit']
  },
  {
    title: 'Analysis & Strategy',
    skills: ['Requirements Gathering', 'Stakeholder Analysis', 'Process Mapping', 'Gap Analysis', 'KPI Definition', 'Root Cause Analysis']
  },
  {
    title: 'Documentation & Delivery',
    skills: ['Business Requirements Documents (BRD)', 'User Stories', 'Workflow Documentation', 'Process Improvement', 'Jira', 'Agile Methodology']
  }
];

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading centered">
        <p className="eyebrow">Skills</p>
        <h2>A balanced skill set across data engineering, analytics, BI, ML, and business delivery.</h2>
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
