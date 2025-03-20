
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import '../Styles/Navbar.css';
import logoImage from '../assets/milk logo.png';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
     <div className="header">
      {/* Top navbar section */}
      <div className="top-navbar">
        <div className="container">
          <div className="address-info">
            <FaMapMarkerAlt className="location-icon" />
            <div className="address-text">
              <p>Kigali Rwanda</p>
              
            </div>
          </div>
          
          <div className="logo-container">
             <img src={logoImage} alt="Milk Farm Logo" className="logo" /> 
          </div>
          
          <div className="actions">
            <button className="get-in-touch-btn">
              <HiOutlineMail className="mail-icon" />
              GET IN TOUCH
            </button>
            <button className="search-btn">
              <FaSearch />
            </button>
            <button className="cart-btn">
              <FaShoppingCart />
              <span className="cart-count">2</span>
            </button>
            <button class="login-button"><a href='/Login' style={{textDecoration: "none", color:'inherit'}}>Login</a></button>
          

          </div>
        </div>
      </div>
      </div>
      {/* Bottom Navigation */}
      <div className="bottom-nav">
      <ul className="nav-links">
        <li className="nav-item active"><Link to="/">HOME</Link></li>
        <li className="nav-item"><a href="/Farming ">Farming & Training</a></li>
        <li className="nav-item"><a href="/Feed">Feed production</a></li>
        <li className="nav-item"><a href="/Mentorship ">Mentorship program</a></li>
        <li className="nav-item"><a href="/Veterinary ">Veterinary service</a></li>
        <li className="nav-item"><a href="/Marketlinkages">Market linkages</a></li>
        <li className="nav-item"><a href="/CONTACT">CONTACT US</a></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;