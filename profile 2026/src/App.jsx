const strengths = [
  {
    title: 'IRM Program Delivery',
    description:
      'Driving implementations from discovery through design, build, testing, and adoption with a steady focus on business outcomes.',
  },
  {
    title: 'ServiceNow Enablement',
    description:
      'Turning platform capabilities into practical workflows that support risk, policy, issue management, and operational clarity.',
  },
  {
    title: 'Cross-Functional Translation',
    description:
      'Working across stakeholders to connect regulatory needs, technical constraints, and day-to-day user experience.',
  },
]

const highlights = [
  '5+ years of IRM implementation experience',
  'Primary focus on ServiceNow delivery',
  'Enterprise programs with process and adoption in mind',
]

const certifications = [
  'ServiceNow CIS Implementor',
  'OneTrust Privacy Professional',
  'Associate Project Manager',
]

function App() {
  return (
    <div className="page-shell">
      <div className="aurora aurora-left" aria-hidden="true" />
      <div className="aurora aurora-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          Bill Feng
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">IRM implementation | ServiceNow delivery | San Francisco</p>
            <h3>
              I help organizations turn risk and compliance goals into working
              systems people can actually use.
            </h3>
            <p className="hero-text">
              I am a Risk and Compliance solution implementor 
              who advocate for customer at every stage of their technology enablement journey.
              With over 5 years of IRM implementation experience, primarily focused on ServiceNow, 
              I combine technical excellence and customer sympathy, helping organization achive transformational outcome. 
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:bill21223@gmail.com">
                Email Me
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/billwfeng/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">What I bring</p>
            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="panel-note">
              Built for people, guided by process, and enabled by technology.
            </p>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Practical delivery for complex environments</h2>
          </div>
          <div className="about-grid">
            <p>
              My background is centered on helping teams stand up and mature
              integrated risk capabilities with clarity and momentum. I enjoy
              translating broad governance requirements into delivery plans,
              usable workflows, and decisions that keep programs moving.
            </p>
            <p>
              Across implementations, I have worked with cross-functional teams
              to define needs, support solution design, demo proof-of-concepts,
              coordinate delivery, and encourage adoption. The goal is not just
              to launch a system, but to make it meaningful in the way people
              operate.
            </p>
          </div>
        </section>

        <section className="section" id="focus">
          <div className="section-heading">
            <p className="section-kicker">Focus</p>
            <h2>Where I create value</h2>
          </div>
          <div className="card-grid">
            {strengths.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials">
          <div className="section-heading">
            <p className="section-kicker">Credentials</p>
            <h2>Certifications and professional grounding</h2>
          </div>
          <div className="credential-row">
            {certifications.map((item) => (
              <div className="credential-chip" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section closing" id="contact">
          <div className="closing-card">
            <p className="section-kicker">Contact</p>
            <h2>Looking for a thoughtful implementation partner?</h2>
            <p>
              If you are shaping or strengthening an IRM program, I would be
              glad to connect and talk through where process, platform, and
              delivery can better support the outcome.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:bill21223@gmail.com">
                bill21223@gmail.com
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/billwfeng/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) Bill Feng 2026</p>
      </footer>
    </div>
  )
}

export default App
