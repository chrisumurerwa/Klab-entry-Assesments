import React from "react";
import '../Styles/Footer.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-left">
          <h2>Sign up for Email updates</h2>
          <p>To sign up for updates or to access your subscriber preferences, please enter your contact information below..</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SIGN UP</button>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="column">
              <h3>Policy and statement</h3>
              <ul>
                <li>Food safety</li>
                <li>Animal welfare policy</li>
                <li>Environmental policy</li>
                <li>Customer satisfaction policy</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                
              </ul>
            </div>
            <div className="column">
              <h3>Related site</h3>
              <ul>
                <li>National farming </li>
                <li>Library</li>
                <li>Minict.gov.rw </li>
                <li>Contact</li>
                <li>Office of inspector</li>
              </ul>
            </div>
            <div className="column">
              <h3>ABOUT</h3>
              <ul>
                <li>Introduction</li>
                <li>Mission statement</li>
                <li>Our values</li>
                <li>Our story</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info & Payment Methods */}
        <div className="footer-right">
          <h2>Happy to help</h2>
          <p>Kigali Rwanda, NY</p>
          <p>Phone: +250 785098785</p>
          <p>Email: christineumurerwa5@gmail.com</p>
          <div className="social-icons">
            <FaFacebook />
            <FaXTwitter />
            <IoLogoLinkedin />
            <FaInstagram />
          </div>

            {/* Farming Section */}
          <div className="farming">
            <h3>help us improve milk-farm</h3>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

