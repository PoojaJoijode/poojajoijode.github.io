const certifications = [
  {
    title: 'Software Developer – IT Services – NASSCOM',
    link: 'https://drive.google.com/file/d/1RfW9uWQxMHVuLh6COXk06RQ5f3HS8mE6/view'
  },
  {
    title: 'AWS: Elastic Load Balancing with Auto Scaling Groups – Udemy',
    link: 'https://drive.google.com/file/d/1gUPKmrJsNJow_pSHgsHIqmoQx6LXX6jZ/view'
  },
  {
    title: 'AI with Machine Learning and Modern JavaScript – Udemy',
    link: 'https://drive.google.com/file/d/1vwParOVkWVqw_LaIrOzsq5TdQaHSbztl/view'
  },
  {
    title: 'Accenture Data Analytics and Job Visualization Simulation',
    link: 'https://drive.google.com/file/d/1pX5JwVV9HJdvjF-NaYV-TDV4pFU9zXbi/view'
  },
  {
    title: 'Python Program – UST',
    link: 'https://drive.google.com/file/d/1EU5WJD_hwF_8c79gbGLZRrmUqQEPmGeQ/edit'
  },
  {
    title: 'Junior Software Developer (QP No. SSC/Q0508)',
    link: 'https://drive.google.com/file/d/1R0qVPJEV190lTEMSyNFISY4QoGcA5ZhN/view'
  }
];

function Certifications() {
  return (
    <section className="section container" id="certifications">
      <div className="section-heading centered">
        <p className="eyebrow">Certifications</p>
        <h2>Continuous learning across software, AWS, AI, data analytics, and programming.</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((certification) => (
          <a
            className="content-card cert-card interactive-card cert-link"
            key={certification.title}
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View certificate for ${certification.title}`}
          >
            <span>{certification.title}</span>
            <small>View Certificate</small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
