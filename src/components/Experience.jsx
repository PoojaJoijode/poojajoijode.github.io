const roles = [
  {
    company: 'Clarkson University',
    title: 'Data Analyst (Web & Automation)',
    period: 'August 2025 - Present',
    location: 'Potsdam, New York',
    points: [
      'Built a Python + LaTeX-to-HTML automation pipeline to convert 50+ academic pages into structured web content, reducing manual formatting effort by 60%.',
      'Created SOP documentation and publishing workflows across 10+ sections, enabling repeatable processes for onboarding, knowledge transfer, and cross-team handoffs.',
      'Used GitHub for version control, issue tracking, bug reporting, and pull request reviews within Agile sprint cycles.'
    ]
  },
  {
    company: 'ROBO+ EduTech',
    title: 'Data & Performance Analyst',
    period: 'June 2024 - October 2024',
    location: 'Mumbai, India',
    points: [
      'Built 5+ Power BI dashboards with DAX measures, slicers, and drill-through navigation to track KPIs and business metrics for weekly executive reviews.',
      'Automated Python ETL workflows including web scraping, data modeling, and reporting pipelines, improving data preparation speed.',
      'Performed root cause analysis on operational and financial datasets using Excel pivot tables and Python scripts, reducing reporting time by 20%.'
    ]
  }
];

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-heading centered">
        <p className="eyebrow">Experience</p>
        <h2>Experience across BI dashboards, automation, root cause analysis, documentation, and Agile delivery.</h2>
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
