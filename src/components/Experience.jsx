const roles = [
  {
    company: 'Clarkson University',
    title: 'Data Analyst (Web & Automation)',
    period: 'August 2025 - Present',
    location: 'Potsdam, New York',
    points: [
      'Built a Python + LaTeX to HTML automation pipeline to transform structured academic content into reusable web outputs, reducing manual publishing effort and improving workflow repeatability.',
      'Designed a reusable content templating and validation process to standardize updates, improve documentation, and support reproducible workflows across future academic pages.',
      'Worked directly with faculty stakeholders to gather requirements, prioritize updates, communicate methodology choices, and deliver decision-ready technical outputs.'
    ]
  },
  {
    company: 'ROBO+ EduTech',
    title: 'Data & Performance Analyst',
    period: 'June 2024 - October 2024',
    location: 'Mumbai, India',
    points: [
      'Built SQL/Python ETL pipelines to extract, clean, validate, and structure learner performance data into analytics-ready datasets.',
      'Designed Power BI dashboards to monitor engagement, assessment trends, operational KPIs, and performance patterns for weekly stakeholder reviews.',
      'Automated reporting from raw data ingestion to formatted outputs, reducing weekly data preparation time by 35%.',
      'Analyzed learner performance trends and translated findings into actionable recommendations.'
    ]
  }
];

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-heading centered">
        <p className="eyebrow">Experience</p>
        <h2>Experience in web automation, ETL, Power BI reporting, and stakeholder delivery.</h2>
      </div>

      <div className="timeline">
        {roles.map((role) => (
          <article className="timeline-item content-card interactive-card" key={`${role.company}-${role.title}`}>
            <div className="timeline-marker" />
            <div className="timeline-header">
              <div>
                <h3>{role.title}</h3>
                <p>{role.company}</p>
              </div>
              <span>{role.period}</span>
            </div>
            <p className="location">{role.location}</p>
            <ul>
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
