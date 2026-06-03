function Hero() {
  const highlights = ['Authorized to work in the US', 'Open to relocate', 'Targeting Data Engineering and Analytics Engineering roles'];

  return (
    <section className="hero section-lg container" id="top">
      <div className="hero-content">
        <p className="eyebrow">Data Science | Data Engineering | BI Analytics</p>
        <h1>Building data workflows that turn messy data into decision-ready insights.</h1>
        <p className="hero-copy">
          I build ETL pipelines, Power BI dashboards, Python automation workflows, and ML models that help teams move
          from raw data to reliable reporting, analysis, and stakeholder-ready recommendations.
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
          Open to Data Analyst, Data Engineer, Analytics Engineer, BI, AI/ML, and Business Analyst roles
        </div>
      </div>
    </section>
  );
}

export default Hero;
