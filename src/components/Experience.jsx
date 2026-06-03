const roles = [
  {
    company: 'Clarkson University',
    title: 'Data Analyst (Web & Automation)',
    period: 'August 2025 - Present',
    location: 'Potsdam, New York',
    points: [
      'Took ownership of a faculty research website that had no update process, then built a Python + LaTeX to HTML pipeline that reduced manual publishing effort and turned a multi-step manual task into a near-automated workflow.',
      'Designed a reusable content templating system so academic pages can be updated consistently without technical intervention, with the goal of scaling the workflow across other departments.',
      'Sole developer on the project; worked directly with the professor to scope requirements, prioritize changes, and deliver technical updates.'
    ]
  },
  {
    company: 'ROBO+ EduTech',
    title: 'Data & Performance Analyst',
    period: 'June 2024 - October 2024',
    location: 'Mumbai, India',
    points: [
      'Built ETL pipelines in Python to pull, clean, and structure learner performance data from multiple source systems that were previously handled manually in spreadsheets every reporting cycle.',
      'Designed and maintained Power BI dashboards tracking student engagement, assessment trends, and operational KPIs used in weekly stakeholder reviews.',
      'Automated the end-to-end reporting workflow from raw data ingestion to formatted output, cutting weekly data preparation time by 35% and eliminating a recurring source of errors.'
    ]
  }
];

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-heading centered">
        <p className="eyebrow">Experience</p>
        <h2>Experience in automation, ETL, Power BI reporting, and stakeholder-facing delivery.</h2>
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
