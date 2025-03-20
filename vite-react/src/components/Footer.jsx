import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>FickleFlight</h2>
          <p>Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Careers</li>
            <li>How we work</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>Support Center</li>
            <li>FAQ</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Covid Advisory</h3>
          <ul>
            <li>Airline Fees</li>
            <li>Tips</li>
            <li>Quarantine Rules</li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;