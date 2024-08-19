import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Abstract</h3>
        <p>Branches.</p>
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="/docs">Blog</a></li>
          <li><a href="/support">Help Center</a></li>
          <li><a href="/faq">Release Notes</a></li>
          <li><a href="/faq">Status</a></li>
        </ul>
      </div>   
      <div className="footer-section">
        <h3>Community</h3>
        <ul>
          <li><a href="/forum">Twitter</a></li>
          <li><a href="/blog">Linkedin</a></li>
          <li><a href="/events">Facebook</a></li>
          <li><a href="/events">Dribble</a></li>
          <li><a href="/events">Podcast</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Legal</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>info@abstract.com</p>
      </div>
    </footer>
  );
};

export default Footer;
