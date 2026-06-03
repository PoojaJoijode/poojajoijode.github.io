const certifications = [
  'Software Developer – IT Services – NASSCOM',
  'AWS: Elastic Load Balancing with Auto Scaling Groups – Udemy',
  'AI with Machine Learning and Modern JavaScript – Udemy',
  'Accenture Data Analytics and Job Visualization Simulation'
];

function Certifications() {
  return (
    <section className="section container" id="certifications">
      <div className="section-heading centered">
        <p className="eyebrow">Certifications</p>
        <h2>Continuous learning across software, AWS, AI, and data analytics.</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((certification) => (
          <div className="content-card cert-card interactive-card" key={certification}>
            {certification}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
