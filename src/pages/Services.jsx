import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: '01',
    title: 'Property Sales',
    tagline: 'Find where you belong.',
    desc: 'We represent both buyers and sellers in the urban market — from first-time purchasers to seasoned investors. Our process is transparent, data-informed, and always guided by your life goals, not commission targets.',
    features: [
      'Curated property matching based on lifestyle',
      'Neighborhood trend analysis',
      'Full acquisition support & legal liaison',
      'Post-sale community onboarding',
    ],
    gradient: 'linear-gradient(135deg, #c45e2e 0%, #8a7360 100%)',
    accent: '#c45e2e',
  },
  {
    id: '02',
    title: 'Rental Management',
    tagline: 'Effortless. Every month.',
    desc: 'For landlords and investment property owners, we manage the full tenant lifecycle — from vetting and placement through maintenance coordination and renewal negotiations — so you never have to.',
    features: [
      'Tenant screening & placement',
      'Lease drafting & renewals',
      'Maintenance coordination & vendor network',
      'Monthly financial reporting',
    ],
    gradient: 'linear-gradient(135deg, #2b2b2b 0%, #c45e2e 100%)',
    accent: '#c45e2e',
  },
  {
    id: '03',
    title: 'Interior Design',
    tagline: 'Spaces that feel like you.',
    desc: 'Our in-house design studio transforms raw space into lived-in home. We work with your existing pieces, introduce intentional additions, and create environments that reflect both personality and urban context.',
    features: [
      'Full interior concept development',
      'Furniture sourcing & curation',
      'Material and finish selection',
      'Renovation project management',
    ],
    gradient: 'linear-gradient(135deg, #8a7360 0%, #c45e2e 100%)',
    accent: '#8a7360',
  },
  {
    id: '04',
    title: 'Community Development',
    tagline: 'Where neighbors become community.',
    desc: 'We design the social infrastructure of buildings: programming, shared spaces, resident networks, and cultural events that turn apartment buildings into living neighbourhoods.',
    features: [
      'Resident programming & cultural events',
      'Shared amenity activation',
      'Resident committee facilitation',
      'Local business partnership strategy',
    ],
    gradient: 'linear-gradient(135deg, #c45e2e 0%, #2b2b2b 100%)',
    accent: '#c45e2e',
  },
  {
    id: '05',
    title: 'Smart Home Integration',
    tagline: 'Technology that disappears.',
    desc: 'The best technology is invisible — it simply works. We integrate smart systems into Urbanthy properties that reduce energy consumption, enhance security, and make everyday living smoother without feeling like science fiction.',
    features: [
      'Building-wide smart energy systems',
      'Keyless access & smart security',
      'Climate and lighting automation',
      'App-connected concierge services',
    ],
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #8a7360 100%)',
    accent: '#8a7360',
  },
  {
    id: '06',
    title: 'Urban Planning Consulting',
    tagline: 'Shape the city intelligently.',
    desc: 'We partner with municipalities, developers, and institutions to advise on urban development strategy — applying our community-first philosophy to projects of all scales across the city.',
    features: [
      'Mixed-use development planning',
      'Community impact assessment',
      'Zoning strategy & regulatory guidance',
      'Participatory design workshops',
    ],
    gradient: 'linear-gradient(135deg, #8a7360 0%, #2b2b2b 100%)',
    accent: '#8a7360',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We start by listening — deeply. Understanding your life, needs, and vision before ever proposing a solution.' },
  { step: '02', title: 'Strategy', desc: 'We map options, run the data, and present a clear, personalised plan built around what\'s right for you.' },
  { step: '03', title: 'Execution', desc: 'Our team handles the complexity. You stay informed at every milestone — without being overwhelmed by it.' },
  { step: '04', title: 'Community', desc: 'The transaction is just the beginning. We help you settle into the life the space makes possible.' },
]

function Services() {
  return (
    <div className="services">

      {/* ── Page Hero ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">What We Do</p>
          <h1 className="page-hero__title">Services Built Around Your Life</h1>
          <p className="page-hero__subtitle">
            From finding your first city apartment to consulting on the next landmark development, our services span the full spectrum of urban living.
          </p>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────── */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services__grid">
            {services.map((s) => (
              <article key={s.id} className="service-card">
                <div className="service-card__header" style={{ background: s.gradient }}>
                  <span className="service-card__id">{s.id}</span>
                  <div className="service-card__header-text">
                    <h2 className="service-card__title">{s.title}</h2>
                    <p className="service-card__tagline">{s.tagline}</p>
                  </div>
                </div>
                <div className="service-card__body">
                  <p className="service-card__desc">{s.desc}</p>
                  <ul className="service-card__features">
                    {s.features.map((f) => (
                      <li key={f}>
                        <span className="service-card__feature-dot" style={{ background: s.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline service-card__cta" style={{ '--outline-color': s.accent, borderColor: s.accent, color: s.accent }}>
                    Get Started
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ────────────────────────────────── */}
      <section className="section services-process">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">How We Work</span>
            <h2 className="display-lg">Our Process</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Every engagement follows a clear, human-centered process designed to reduce friction and amplify results.
            </p>
            <span className="divider divider--center" />
          </div>

          <div className="process__grid">
            {process.map((p) => (
              <div key={p.step} className="process-step">
                <div className="process-step__num">{p.step}</div>
                <h3 className="process-step__title">{p.title}</h3>
                <p className="process-step__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="section services-cta">
        <div className="container">
          <div className="services-cta__inner">
            <div>
              <span className="section-label">Ready?</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: 'var(--white)' }}>
                Let's Talk About<br />What You Need
              </h2>
              <p style={{ color: 'rgba(240,235,227,0.7)', marginTop: '16px', lineHeight: '1.7', maxWidth: '400px' }}>
                No pressure, no scripts. Just an honest conversation about how we can help you find your place in the city.
              </p>
            </div>
            <div className="services-cta__actions">
              <Link to="/contact" className="btn btn-primary btn--lg">
                Book a Consultation
              </Link>
              <div className="services-cta__note">
                <span>Average response time:</span>
                <strong>Under 2 hours</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
