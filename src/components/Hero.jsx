function Hero() {
  const highlights = ['Authorized to work in the US', 'Open to relocate', 'Available for Summer/Fall 2026 roles'];

  return (
    <section className="hero section-lg container" id="top">
      <div className="hero-content">
        <p className="eyebrow">Data Scientist | Applied Analytics | BI Developer</p>
        <h1>Building data products that turn messy data into business decisions.</h1>
        <p className="hero-copy">
          I build SQL and Python pipelines, machine learning models, and Power BI dashboards that help teams move from
          raw data to clear, stakeholder-ready recommendations.
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
          Open to Data Analyst, Data Engineer, BI, AI/ML, and Business Analyst roles
        </div>
      </div>
    </section>
  );
}

export default Hero;
