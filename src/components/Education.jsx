const education = [
  {
    school: 'Clarkson University',
    degree: 'Master\'s in Applied Data Science',
    period: 'January 2025 - May 2026',
    location: 'Potsdam, New York'
  },
  {
    school: 'International Institute of Information Technology Bangalore',
    degree: 'Advanced Data Science',
    period: 'November 2023 - July 2024',
    location: 'Bangalore, India'
  },
  {
    school: 'Jai Hind College',
    degree: 'Bachelor of Vocation in Software Development',
    period: 'August 2021 - May 2024',
    location: 'Mumbai, India'
  }
];

function Education() {
  return (
    <section className="section container" id="education">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic foundation in applied data science, analytics, and software development.</h2>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="content-card education-card interactive-card" key={item.school}>
            <h3>{item.school}</h3>
            <p>{item.degree}</p>
            <span>{item.period}</span>
            <small>{item.location}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
