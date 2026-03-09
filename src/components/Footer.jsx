import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-mark">U</span>
                <span>rbanthy</span>
              </Link>
              <p className="footer__tagline">
                Reimagining urban living through design, community, and purpose. Your city story starts here.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Instagram">Instagram</a>
                <a href="#" className="footer__social-link" aria-label="Twitter">Twitter / X</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" className="footer__social-link" aria-label="Facebook">Facebook</a>
              </div>
            </div>

            {/* Navigate */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navigate</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                <li><Link to="/services">Property Sales</Link></li>
                <li><Link to="/services">Rental Management</Link></li>
                <li><Link to="/services">Interior Design</Link></li>
                <li><Link to="/services">Smart Home</Link></li>
                <li><Link to="/services">Urban Planning</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <ul className="footer__contact-list">
                <li>
                  <span className="footer__contact-label">Main Office</span>
                  <span>440 Midtown Blvd, Suite 12</span>
                  <span>New York, NY 10018</span>
                </li>
                <li>
                  <span className="footer__contact-label">Phone</span>
                  <a href="tel:+12125550183">+1 (212) 555-0183</a>
                </li>
                <li>
                  <span className="footer__contact-label">Email</span>
                  <a href="mailto:hello@urbanthy.com">hello@urbanthy.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              &copy; {currentYear} Urbanthy. All rights reserved.
            </p>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <span className="footer__legal-sep">·</span>
              <a href="#">Terms of Service</a>
              <span className="footer__legal-sep">·</span>
              <a href="#">Fair Housing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
