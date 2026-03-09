import { useState } from 'react'
import './Contact.css'

const offices = [
  {
    name: 'Manhattan HQ',
    neighborhood: 'Hudson Yards',
    address: '440 Midtown Blvd, Suite 12',
    city: 'New York, NY 10018',
    phone: '+1 (212) 555-0183',
    email: 'manhattan@urbanthy.com',
    hours: 'Mon–Fri 9am–7pm · Sat 10am–5pm',
    color: 'linear-gradient(135deg, #c45e2e 0%, #8a7360 100%)',
  },
  {
    name: 'Brooklyn Studio',
    neighborhood: 'Brooklyn Heights',
    address: '82 Promenade East, Floor 3',
    city: 'Brooklyn, NY 11201',
    phone: '+1 (718) 555-0247',
    email: 'brooklyn@urbanthy.com',
    hours: 'Mon–Fri 9am–6pm · Sat 10am–4pm',
    color: 'linear-gradient(135deg, #2b2b2b 0%, #c45e2e 100%)',
  },
  {
    name: 'West Side Office',
    neighborhood: 'Meatpacking District',
    address: '16 Gansevoort Street, 2F',
    city: 'New York, NY 10014',
    phone: '+1 (212) 555-0391',
    email: 'westside@urbanthy.com',
    hours: 'Tue–Sat 10am–6pm',
    color: 'linear-gradient(135deg, #8a7360 0%, #2b2b2b 100%)',
  },
]

const inquiryTypes = [
  'Property Purchase',
  'Rental Enquiry',
  'Interior Design',
  'Investment Consultation',
  'Community Development',
  'Smart Home Integration',
  'Urban Planning',
  'General Enquiry',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', type: '', message: '', budget: '' })
    setErrors({})
  }

  return (
    <div className="contact">

      {/* ── Page Hero ──────────────────────────────────── */}
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="page-hero__label">Get In Touch</p>
          <h1 className="page-hero__title">Let's Start a Conversation</h1>
          <p className="page-hero__subtitle">
            Whether you're searching for your first city home or consulting on a major development, we're here — and we genuinely want to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main Contact Section ────────────────────────── */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact__layout">

            {/* Form */}
            <div className="contact__form-wrap">
              <h2 className="contact__form-title">Send Us a Message</h2>
              <p className="contact__form-subtitle">We respond within 2 hours on business days.</p>

              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✓</div>
                  <h3>Message Received</h3>
                  <p>Thank you, {formData.name}. A member of our team will be in touch within two hours. We look forward to helping you find your place in the city.</p>
                  <button className="btn btn-primary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (212) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="type">Enquiry Type</label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">Budget Range (Optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range...</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K – $1M</option>
                      <option value="1m-2m">$1M – $2M</option>
                      <option value="2m-5m">$2M – $5M</option>
                      <option value="5m+">$5M+</option>
                      <option value="rental">Rental (under $5K/mo)</option>
                      <option value="rental-luxury">Rental ($5K+/mo)</option>
                    </select>
                  </div>

                  <div className={`form-field ${errors.message ? 'form-field--error' : ''}`}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about what you're looking for, your timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn--lg contact-form__submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="contact__sidebar">
              <div className="contact__info-block">
                <h3 className="contact__info-title">Direct Contact</h3>
                <div className="contact__info-item">
                  <span className="contact__info-label">Main Line</span>
                  <a href="tel:+12125550183" className="contact__info-value">+1 (212) 555-0183</a>
                </div>
                <div className="contact__info-item">
                  <span className="contact__info-label">General Email</span>
                  <a href="mailto:hello@urbanthy.com" className="contact__info-value">hello@urbanthy.com</a>
                </div>
                <div className="contact__info-item">
                  <span className="contact__info-label">Press & Media</span>
                  <a href="mailto:press@urbanthy.com" className="contact__info-value">press@urbanthy.com</a>
                </div>
              </div>

              <div className="contact__info-block">
                <h3 className="contact__info-title">Response Times</h3>
                <div className="contact__response-list">
                  <div className="contact__response-item">
                    <span className="contact__response-type">General Enquiry</span>
                    <span className="contact__response-time">Under 2 hours</span>
                  </div>
                  <div className="contact__response-item">
                    <span className="contact__response-type">Property Viewing</span>
                    <span className="contact__response-time">Same day</span>
                  </div>
                  <div className="contact__response-item">
                    <span className="contact__response-type">Consultation</span>
                    <span className="contact__response-time">24 hours</span>
                  </div>
                </div>
              </div>

              <div className="contact__social-block">
                <h3 className="contact__info-title">Follow Our Story</h3>
                <div className="contact__social-links">
                  <a href="#" className="contact__social-link">Instagram — @urbanthy</a>
                  <a href="#" className="contact__social-link">Twitter/X — @urbanthy</a>
                  <a href="#" className="contact__social-link">LinkedIn — Urbanthy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Neighborhood Offices ────────────────────────── */}
      <section className="section contact-offices">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Locations</span>
            <h2 className="display-lg">Find Us in the Neighborhood</h2>
            <p className="section-subtitle">
              Three offices, strategically placed in the districts where we work most closely.
            </p>
            <span className="divider" />
          </div>

          <div className="offices__grid">
            {offices.map((o) => (
              <article key={o.name} className="office-card">
                <div className="office-card__header" style={{ background: o.color }}>
                  <span className="office-card__neighborhood">{o.neighborhood}</span>
                  <h3 className="office-card__name">{o.name}</h3>
                </div>
                <div className="office-card__body">
                  <div className="office-card__detail">
                    <span className="office-card__detail-label">Address</span>
                    <span>{o.address}</span>
                    <span>{o.city}</span>
                  </div>
                  <div className="office-card__detail">
                    <span className="office-card__detail-label">Phone</span>
                    <a href={`tel:${o.phone.replace(/\D/g, '')}`}>{o.phone}</a>
                  </div>
                  <div className="office-card__detail">
                    <span className="office-card__detail-label">Email</span>
                    <a href={`mailto:${o.email}`}>{o.email}</a>
                  </div>
                  <div className="office-card__detail">
                    <span className="office-card__detail-label">Hours</span>
                    <span>{o.hours}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
