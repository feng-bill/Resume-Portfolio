const strengths = [
  {
    title: 'IRM Transformation & Delivery',
    description:
      'Guiding IRM initiatives from roadmap and design through implementation and adoption, with a focus on sustainable business outcomes.',
  },
  {
    title: 'Solution & Platform Enablement',
    description:
      'Translating risk and compliance needs into practical, scalable solutions, with deep experience enabling IRM through ServiceNow.',
  },
  {
    title: 'Business & Technology Alignment',
    description:
      'Connecting business, regulatory, and technical stakeholders to navigate priorities, make informed decisions, and move programs forward.',
  },
]

const highlights = [
  '5+ years delivering IRM transformations',
  'Bridging business, process, and technology',
  'Turning complexity into practical solutions',
]

const certifications = [
  {
    title: 'ServiceNow CIS - R&C Implementor',
    logo: 'servicenow',
  },
  {
    title: 'OneTrust Privacy Professional',
    logo: 'onetrust',
  },
  {
    title: 'Certified Associate Product Manager',
    logo: 'pmp',
  },
  {
    title: 'Certified Scrum Product Owner',
    logo: 'scrumalliance',
  },
]

function CertificationLogo({ type }) {
  if (type === 'servicenow') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#19a974" />
        <text x="24" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">
          now
        </text>
      </svg>
    )
  }

  if (type === 'onetrust') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#0f4c81" />
        <circle cx="24" cy="24" r="11" fill="none" stroke="#ffffff" strokeWidth="4" />
        <path
          d="M24 5a19 19 0 0 1 0 38"
          fill="none"
          stroke="#9fd2ff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (type === 'pmp') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="4" y="6" width="40" height="36" rx="10" fill="#246b57" />
        <text x="24" y="29" textAnchor="middle" fill="#f5d06f" fontSize="14" fontWeight="800">
          PMP
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#f26b3a" />
      <path
        d="M15 24c0-5.2 4.1-9.4 9.2-9.4 3.8 0 7.1 2.3 8.5 5.7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M33 24c0 5.2-4.1 9.4-9.2 9.4-3.8 0-7.1-2.3-8.5-5.7"
        fill="none"
        stroke="#ffd7bf"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function App() {
  const handleEmailClick = () => {
    const user = ['bill', '21223'].join('')
    const domain = ['gmail', 'com'].join('.')

    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <div>
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
        

        <section className="hero section" id="about">
          <div className="hero-copy">
            {/* <p className="section-kicker">About</p> */}
            <h2>About</h2>
            <p className="hero-text">
              Bill has over five years of experience delivering Integrated Risk Management and GRC initiatives, 
              with a focus on ServiceNow-enabled transformation. He has extensive experience delivering solutions across 
              the implementation lifecycle, 
              working with cross-functional teams from requirements and solution design through development, testing, 
              deployment, and adoption. He combines strong technical expertise with an understanding of business 
              processes to translate complex risk and regulatory requirements into practical, scalable solutions.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={handleEmailClick}
              >
                Email Me
              </button>
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
            
          </aside>
        </section>
<section className="section irm-section">
          <div className="irm-card hero-copy hero-copy-intro">
            <p className="eyebrow">
              Integrated Risk Management | Technology Transformation | ServiceNow
            </p>
            <h2>
              Built for people, guided by process, and enabled by technology.
            </h2>
            <p className="hero-text">
              I&apos;m an Integrated Risk Management professional focused on
              turning complex risk, compliance, and business requirements into
              practical solutions that work at scale. With 5+ years of
              experience delivering technology-enabled risk transformations, I
              work across business and technical teams to shape roadmaps, guide
              solution design, and move programs from discovery through
              implementation and adoption. I believe successful transformation
              requires more than technology - it comes from balancing business
              needs, regulatory requirements, technical capabilities, and the
              people who ultimately use the solution.
            </p>
          </div>
        </section>
        <section className="section" id="focus">
          <div className="section-heading">
            <p className="section-kicker">Focus</p>
            <h2>What I focus</h2>
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
            <h2>Certifications</h2>
          </div>
          <div className="credential-row">
            {certifications.map((item) => (
              <div className="credential-chip" key={item.title}>
                <span className={`credential-logo credential-logo-${item.logo}`}>
                  <CertificationLogo type={item.logo} />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section closing" id="contact">
          <div className="closing-card">
            <p className="section-kicker">Contact</p>
            <h2>Building the next stage of your risk transformation?</h2>
            <p>
              If you are shaping or strengthening an IRM program, 
              I would be glad to connect and talk through where process, platform,
               and delivery can better support the outcome.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={handleEmailClick}
              >
                Start an Email
              </button>
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
