
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Logo and Copyright */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Logo width="100px" />
          </div>

          <p className="footer-copyright">
            © Copyright 2026. All Rights Reserved by DevUI.
          </p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li><Link to="/">Features</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Affiliate Program</Link></li>
            <li><Link to="/">Press Kit</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <ul>
            <li><Link to="/">Account</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Customer Support</Link></li>
          </ul>
        </div>

        {/* Legals */}
        <div className="footer-column">
          <h3>Legals</h3>

          <ul>
            <li><Link to="/">Terms &amp; Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Licensing</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>Made with ❤️ for readers and creators.</p>
      </div>

    </footer>
  )
}

export default Footer
