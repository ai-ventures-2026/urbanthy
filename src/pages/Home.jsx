import { Link } from 'react-router-dom'
import './Home.css'

/* ─── Data ─────────────────────────────────────────── */

const properties = [
  {
    id: 1,
    name: 'The Terrace Lofts',
    location: 'Meatpacking District',
    type: 'Loft Residences',
    price: 'From $1.2M',
    beds: '1–3 Bed',
    sqft: '780–2,100 sq ft',
    tag: 'Now Selling',
    gradient: 'linear-gradient(135deg, #c45e2e 0%, #8a7360 60%, #2b2b2b 100%)',
    features: ['Rooftop Terrace', 'Exposed Brick', 'Floor-to-Ceiling Windows'],
  },
  {
    id: 2,
    name: 'Midtown Residences',
    location: 'Hudson Yards',
    type: 'Luxury Apartments',
    price: 'From $3,800/mo',
    beds: 'Studio–2 Bed',
    sqft: '520–1,450 sq ft',
    tag: 'Now Leasing',
    gradient: 'linear-gradient(135deg, #2b2b2b 0%, #4a3d32 60%, #c45e2e 100%)',
    features: ['Concierge Service', 'Sky Lounge', 'Fitness Centre'],
  },
  {
    id: 3,
    name: 'The Artisan Quarter',
    location: 'Brooklyn Heights',
    type: 'Live–Work Units',
    price: 'From $895K',
    beds: '1–4 Bed',
    sqft: '900–2,800 sq ft',
    tag: 'Pre-Launch',
    gradient: 'linear-gradient(135deg, #8a7360 0%, #c45e2e 50%, #1a1a1a 100%)',
    features: ['Artist Studios', 'Community Garden', 'Gallery Space'],
  },
]

const amenities = [
  { icon: '◈', title: 'Rooftop Gardens', desc: 'Curated green spaces above the skyline for residents to breathe, meet, and grow.' },
  { icon: '◉', title: 'Co-working Lounges', desc: 'Professional spaces built into every building so work happens where life does.' },
  { icon: '◎', title: 'Wellness Studios', desc: 'Yoga, cycling, and meditation rooms designed for the modern urban body.' },
  { icon: '◆', title: 'Artisan Markets', desc: 'Weekly pop-up markets connecting residents with local makers and chefs.' },
  { icon: '◇', title: 'Smart Concierge', desc: '24/7 AI-assisted concierge for packages, reservations, and building services.' },
  { icon: '◐', title: 'Community Events', desc: 'Curated cultural programming—film nights, talks, tastings—every week.' },
]

const neighborhoods = [
  {
    name: 'Meatpacking District',
    vibe: 'Electric & Creative',
    desc: 'Where high fashion meets cobblestone history. Galleries, rooftop bars, and the High Line converge in New York\'s most dynamic quarter.',
    gradient: 'linear-gradient(160deg, #c45e2e 0%, #2b2b2b 100%)',
  },
  {
    name: 'Hudson Yards',
    vibe: 'Forward & Ambitious',
    desc: 'The city\'s newest neighborhood redefines skyline living. Architectural marvel meets world-class dining and the edge of tomorrow.',
    gradient: 'linear-gradient(160deg, #2b2b2b 0%, #4a3d32 50%, #8a7360 100%)',
  },
  {
    name: 'Brooklyn Heights',
    vibe: 'Grounded & Soulful',
    desc: 'Tree-lined promenades, jaw-dropping Manhattan views, and a creative community that defines the borough\'s cultural heartbeat.',
    gradient: 'linear-gradient(160deg, #8a7360 0%, #c45e2e 100%)',
  },
]

const testimonials = [
  {
    quote: 'Moving into The Terrace Lofts was the best decision I\'ve ever made. The community here is unlike anything I\'ve experienced — neighbors who actually become friends.',
    author: 'Maya Chen',
    role: 'Creative Director, Resident since 2022',
    initial: 'M',
  },
  {
    quote: 'Urbanthy understood what I needed before I even articulated it myself. The process was seamless and the result is a home that genuinely reflects my life.',
    author: 'Jordan Reyes',
    role: 'Tech Entrepreneur, Midtown Residences',
    initial: 'J',
  },
  {
    quote: 'I\'ve lived in five cities. Nothing compares to the sense of belonging Urbanthy builds into its spaces. It\'s architecture with genuine human intention.',
    author: 'Priya Nair',
    role: 'Architect, The Artisan Quarter',
    initial: 'P',
  },
]

/* ─── Component ─────────────────────────────────────── */

function Home() {
  return (
    <div className="home">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-layer hero__bg-layer--1" />
          <div className="hero__bg-layer hero__bg-layer--2" />
          <div className="hero__bg-layer hero__bg-layer--3" />
          <div className="hero__grid-overlay" />
        </div>

        <div className="container hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            <span>New York City · Brooklyn · Hudson Yards</span>
          </div>

          <h1 className="hero__headline">
            Your City.<br />
            Your Story.<br />
            <em>Your Home.</em>
          </h1>

          <p className="hero__subtext">
            We design residences for the way you actually live — bold, connected, and rooted in the pulse of urban culture. Not just a place to stay. A place to belong.
          </p>

          <div className="hero__actions">
            <Link to="/services" className="btn btn-primary btn--lg">
              Explore Properties
            </Link>
            <Link to="/about" className="btn btn-secondary btn--lg">
              Our Story
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">320+</span>
              <span className="hero__stat-label">Homes Placed</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">12</span>
              <span className="hero__stat-label">Neighborhoods</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Resident Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ─────────────────────────── */}
      <section className="section properties">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Properties</span>
            <h2 className="display-lg">Spaces Worth Living In</h2>
            <p className="section-subtitle">
              Each Urbanthy property is selected for its architecture, community context, and capacity to become a genuine home.
            </p>
            <span className="divider" />
          </div>

          <div className="properties__grid">
            {properties.map((p) => (
              <article key={p.id} className="property-card card">
                <div className="property-card__visual" style={{ background: p.gradient }}>
                  <span className="property-card__tag">{p.tag}</span>
                  <div className="property-card__visual-inner">
                    <span className="property-card__type">{p.type}</span>
                  </div>
                </div>

                <div className="property-card__body">
                  <div className="property-card__location">
                    <span className="property-card__location-dot" />
                    {p.location}
                  </div>
                  <h3 className="property-card__name">{p.name}</h3>

                  <div className="property-card__meta">
                    <span>{p.beds}</span>
                    <span className="property-card__meta-sep">·</span>
                    <span>{p.sqft}</span>
                  </div>

                  <ul className="property-card__features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className="property-card__footer">
                    <span className="property-card__price">{p.price}</span>
                    <Link to="/contact" className="btn btn-outline">
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="properties__cta">
            <Link to="/services" className="btn btn-dark btn--lg">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE / AMENITIES ────────────────────────── */}
      <section className="section section--lifestyle">
        <div className="container">
          <div className="lifestyle__layout">
            <div className="lifestyle__intro">
              <span className="section-label">Urban Amenities</span>
              <h2 className="display-md">Built for How <br />You Actually Live</h2>
              <p style={{ marginTop: '16px', color: 'var(--warm-brown)', lineHeight: '1.7' }}>
                Every Urbanthy residence comes with a curated ecosystem of spaces and services designed to enhance daily city life — not just the apartment itself.
              </p>
              <span className="divider" style={{ marginTop: '24px' }} />
              <Link to="/services" className="btn btn-primary" style={{ marginTop: '32px' }}>
                See All Amenities
              </Link>
            </div>

            <div className="lifestyle__grid">
              {amenities.map((a) => (
                <div key={a.title} className="amenity-card">
                  <span className="amenity-card__icon">{a.icon}</span>
                  <h4 className="amenity-card__title">{a.title}</h4>
                  <p className="amenity-card__desc">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOOD HIGHLIGHTS ─────────────────────── */}
      <section className="section neighborhoods">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Neighborhoods</span>
            <h2 className="display-lg">Find Your District</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Every great city has its chapters. We know which neighborhoods are writing the most compelling ones.
            </p>
            <span className="divider divider--center" />
          </div>

          <div className="neighborhoods__grid">
            {neighborhoods.map((n) => (
              <article key={n.name} className="neighborhood-card" style={{ background: n.gradient }}>
                <div className="neighborhood-card__inner">
                  <span className="neighborhood-card__vibe">{n.vibe}</span>
                  <h3 className="neighborhood-card__name">{n.name}</h3>
                  <p className="neighborhood-card__desc">{n.desc}</p>
                  <Link to="/contact" className="neighborhood-card__link">
                    Explore →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Resident Stories</span>
            <h2 className="display-lg">Voices from the Community</h2>
            <span className="divider divider--center" />
          </div>

          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <article key={t.author} className="testimonial-card">
                <div className="testimonial-card__quote-mark">"</div>
                <blockquote className="testimonial-card__quote">{t.quote}</blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-card__name">{t.author}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container cta-banner__content">
          <span className="section-label" style={{ color: 'rgba(240,235,227,0.7)' }}>Ready to Begin?</span>
          <h2 className="display-lg" style={{ color: 'var(--white)', marginTop: '8px' }}>
            Find Your Space<br />in the City
          </h2>
          <p style={{ color: 'rgba(240,235,227,0.7)', maxWidth: '500px', marginTop: '20px', lineHeight: '1.7', fontSize: '1.0625rem' }}>
            Whether you're buying, renting, or simply exploring what urban living could look like for you — our team is ready to guide every step.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary btn--lg">
              Schedule a Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary btn--lg">
              View Listings
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
