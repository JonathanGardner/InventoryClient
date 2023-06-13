import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 
import SocialLinks from '../social/SocialLinks'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-content">
            <h3>CONTACTS</h3>
            <a href="https://maps.google.com/?q=1882+US-9,Cape+May+Court+House,NJ+08210" target="_blank" rel="noopener noreferrer">1882 US-9, Cape May Court House, NJ 08210</a>
            <a href="tel:6096240400">(609) 624-0400</a>
            <p>info@golfcarsunlimited.com</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-content">
            <h3>HOURS</h3>
            <p>Tuesday - Saturday: 9AM - 5PM</p>
            <p>Sunday: Closed</p>
            <p>Monday: Closed</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-content">
            <h3>LINKS</h3>
            <Link to="/inventory">Inventory</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>
      </div>
      
      <hr className="footer-line" /> 
      <div className="footer-bottom">
        <div className="footer-bottom-section"></div>
        <div className="footer-bottom-section">
          <p className="footer-copyright">
            Copyright @ Golf Cars Unlimited 2023. All Rights Reserved. | 
            <span className="footer-links"><Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link></span>
          </p>
        </div>
        <div className="footer-bottom-section">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
