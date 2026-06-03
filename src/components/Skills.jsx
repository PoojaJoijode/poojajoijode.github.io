const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'Pandas', 'NumPy', 'SciPy', 'scikit-learn', 'SQL', 'R']
  },
  {
    title: 'Data Science',
    skills: ['Regression', 'Classification', 'Decision Trees', 'Random Forest', 'XGBoost', 'Clustering', 'NLP']
  },
  {
    title: 'Data & BI',
    skills: ['ETL', 'Data Cleaning', 'Data Validation', 'Data Modeling', 'Power BI', 'Tableau', 'DAX', 'KPI Reporting']
  },
  {
    title: 'Tools & Engineering',
    skills: ['AWS', 'Spark', 'PySpark', 'MySQL', 'Docker', 'Streamlit', 'Hadoop', 'GitHub']
  }
];

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading centered">
        <p className="eyebrow">Skills</p>
        <h2>A technical stack built for analytics, BI, ML, and data workflows.</h2>
      </div>

      <div className="skill-grid four-card-grid">
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
