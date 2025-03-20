import React from 'react';
import '../Styles/MarketLinkages.css';

const MarketLinkages = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h2>About Market Linkages</h2>
        <p>
          In the dairy industry, connecting farmers to reliable buyers and value addition 
          opportunities is crucial for sustainability and profitability.
        </p>
        <a href="#" className="discover-link">Discover How →</a>
      </div>

      {/* Right Section - Navigation */}
      <div className="nav-section">
        <ul className="nav-list">
          <li className="active-nav">Connecting with Buyers</li>
          <li>Processing Companies</li>
          <li>Export Opportunities</li>
          <li>Value Addition Training</li>
          <li>Pricing and Market Trends</li>
        </ul>

        {/* Submenu (Right side) */}
        <div className="sub-menu">
          <h3>Connecting with Buyers Overview <span className="arrow">→</span></h3>
          <p>
            Learn how to access verified dairy product buyers through direct trade 
            and organized market linkages.
          </p>
          <a href="#">Verified Buyer Networks →</a>
          <a href="#">Market Research Reports →</a>
        </div>
      </div>
    </div>
  );
};

export default MarketLinkages;
