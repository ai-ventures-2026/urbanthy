import { Link } from 'react-router-dom'
import './About.css'

const team = [
  {
    name: 'Simone Adeyemi',
    role: 'Co-Founder & CEO',
    bio: 'Former urban planner turned developer. Simone has spent 15 years reshaping city neighborhoods with projects that put community over profit margins.',
    expertise: ['Urban Strategy', 'Community Development', 'Sustainable Design'],
    initial: 'S',
    color: 'linear-gradient(135deg, #c45e2e, #8a7360)',
  },
  {
    name: 'Marco Vidal',
    role: 'Co-Founder & Chief Design Officer',
    bio: 'Award-winning architect with studios in New York, Barcelona, and Lagos. Marco believes architecture should tell the story of the people who inhabit it.',
    expertise: ['Architecture', 'Interior Design', 'Adaptive Reuse'],
    initial: 'M',
    color: 'linear-gradient(135deg, #2b2b2b, #c45e2e)',
  },
  {
    name: 'Leila Farouq',
    role: 'Head of Community & Culture',
    bio: 'Community organizer, former museum curator, and the creative force behind Urbanthy\'s programming. Leila turns buildings into neighborhoods.',
    expertise: ['Cultural Programming', 'Resident Relations', 'Partnership Strategy'],
    initial: 'L',
    color: 'linear-gradient(135deg, #8a7360, #2b2b2b)',
  },
]

const values = [
  {
    num: '01',
    title: 'Community First',
    desc: 'Before blueprints, we listen. Every development begins with conversations — with residents, local businesses, and the people who make a neighborhood alive.',
  },
  {
    num: '02',
    title: 'Design with Purpose',
    desc: 'Beauty without intention is just decoration. Every decision — a lobby\'s natural light, a rooftop\'s sight line — is deliberate, purposeful, human.',
  },
  {
    num: '03',
    title: 'Honest Sustainability',
    desc: 'Not greenwashing. Actual choices: recycled materials, passive cooling, solar integration, and long-term building maintenance that respects the planet.',
  },
  {
    num: '04',
    title: 'Urban Belonging',
    desc: 'The city shouldn\'t be somewhere you survive. We build places that make people feel they belong — to a home, to each other, to the city itself.',
  },
]

const milestones = [
  { year: '2014', event: 'Founded in Brooklyn with one building and a vision.' },
  { year: '2016', event: 'First community development award — The Artisan Quarter pilot project.' },
  { year: '2018', event: 'Expanded to Manhattan. Launched the Resident Culture Program.' },
  { year: '2020', event: 'Green Building certification achieved across all properties.' },
  { year: '2022', event: '300th resident placed. Smart Home integration rollout begins.' },
  { year: '2024', event: 'Named one of Fast Company\'s Most Innovative Urban Living Brands.' },
]

const sustainabilityStats = [
  { value: '40%', label: 'Reduction in energy use vs. conventional builds' },
  { value: '85%', label: 'Recycled or locally sourced materials per project' },
  { value: '12', label: 'Green building certifications earned' },
  { value: '100%', label: 'Buildings with rooftop green or solar installations' },
]

function About() {
  return (
    <div className="about">

      {/* ── Page Hero ──────────────────────────────────── */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="about-hero__content">
            <div>
              <p className="page-hero__label">Our Story</p>
              <h1 className="page-hero__title">
                Built on Belief.<br />Shaped by People.
              </h1>
              <p className="page-hero__subtitle">
                Urbanthy began with a simple conviction: city living should be extraordinary. Not just for a few — but for anyone who chooses to make the city their home.
              </p>
              <div className="about-hero__actions">
                <Link to="/contact" className="btn btn-primary btn--lg">Work With Us</Link>
                <Link to="/services" className="btn btn-secondary btn--lg">Our Services</Link>
              </div>
            </div>
            <div className="about-hero__visual" aria-hidden="true">
              <div className="about-hero__visual-inner">
                <div className="about-hero__shape about-hero__shape--1" />
                <div className="about-hero__shape about-hero__shape--2" />
                <div className="about-hero__shape about-hero__shape--3" />
                <div className="about-hero__badge">
                  <span className="about-hero__badge-number">10+</span>
                  <span className="about-hero__badge-label">Years Building<br/>Urban Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ─────────────────────────────────────── */}
      <section className="section about-vision">
        <div className="container">
          <div className="about-vision__layout">
            <div className="about-vision__text">
              <span className="section-label">Our Vision</span>
              <h2 className="display-md">The City as It Should Be</h2>
              <span className="divider" />
              <p>
                We founded Urbanthy because the real estate industry had forgotten something essential: people. Not just buyers and renters — but humans who needed places to grow, to rest, to be in community with each other.
              </p>
              <p>
                Our vision is a city where every block tells a story worth reading. Where the architecture respects the history of the street while boldly anticipating the future. Where the lobby isn't just a lobby — it's the first page of how someone's life unfolds.
              </p>
              <p>
                We don't just develop property. We develop the conditions for genuine urban belonging.
              </p>
              <Link to="/services" className="btn btn-primary" style={{ marginTop: '8px' }}>
                Explore Our Work
              </Link>
            </div>
            <div className="about-vision__values">
              {values.map((v) => (
                <div key={v.num} className="value-item">
                  <span className="value-item__num">{v.num}</span>
                  <div>
                    <h4 className="value-item__title">{v.title}</h4>
                    <p className="value-item__desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Our Journey</span>
            <h2 className="display-lg">A Decade of Urban Belief</h2>
            <span className="divider divider--center" />
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <p className="timeline__event">{m.event}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section className="section about-team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Team</span>
            <h2 className="display-lg">The People Behind the Places</h2>
            <p className="section-subtitle">
              Three founders, one shared obsession: building cities worth living in.
            </p>
            <span className="divider" />
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card__avatar" style={{ background: member.color }}>
                  <span>{member.initial}</span>
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>
                  <div className="team-card__expertise">
                    {member.expertise.map((e) => (
                      <span key={e} className="team-card__tag">{e}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability ─────────────────────────────── */}
      <section className="section about-sustainability">
        <div className="container">
          <div className="sustainability__layout">
            <div className="sustainability__intro">
              <span className="section-label" style={{ color: 'rgba(240,235,227,0.6)' }}>Our Commitment</span>
              <h2 className="display-md" style={{ color: 'var(--white)', marginTop: '12px' }}>
                Sustainability<br />Without Compromise
              </h2>
              <span className="divider" />
              <p style={{ color: 'rgba(240,235,227,0.7)', marginTop: '20px', lineHeight: '1.7' }}>
                We believe that responsible development isn't optional — it's the minimum. Our sustainability program goes beyond certification to genuinely reduce the footprint of urban living.
              </p>
              <p style={{ color: 'rgba(240,235,227,0.7)', marginTop: '16px', lineHeight: '1.7' }}>
                Every building we develop is designed for the long term: built materials that last, energy systems that evolve, and communities that self-sustain.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                Learn About Our Process
              </Link>
            </div>
            <div className="sustainability__stats">
              {sustainabilityStats.map((s) => (
                <div key={s.label} className="sustainability-stat">
                  <span className="sustainability-stat__value">{s.value}</span>
                  <span className="sustainability-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
