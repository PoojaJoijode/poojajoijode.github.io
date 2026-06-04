function Hero() {
  const highlights = [
    'Authorized to work in the US',
    'Open to relocate',
    'Targeting Data Analyst, BI Analyst, Technical Support Engineer, and Product Engineer roles'
  ];

  return (
    <section className="hero section-lg container" id="top">
      <div className="hero-content">
        <p className="eyebrow">Data Analytics | BI Reporting | Technical Support</p>
        <h1>Solving data, reporting, and product support problems with clear technical execution.</h1>
        <p className="hero-copy">
          I work across Power BI dashboards, SQL analytics, Python automation, troubleshooting workflows, technical
          documentation, and stakeholder communication. My strength is connecting analytical thinking with practical
          support execution so teams can diagnose issues, improve reporting, and make faster decisions.
        </p>

        <div className="hero-highlights" aria-label="Profile highlights">
          {highlights.map((highlight) => (
            <span className="hero-chip" key={highlight}>{highlight}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="/assets/Pooja_Joijode_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a className="button ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="Pooja Joijode profile card">
        <div className="profile-frame">
          <img src="/assets/pooja-profile.webp" alt="Pooja Joijode professional headshot" />
        </div>
        <div className="hero-status">
          <span className="status-dot" />
          Open to data analytics, BI, technical support, product support, and product engineering opportunities
        </div>
      </div>
    </section>
  );
}

export default Hero;
