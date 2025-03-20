import React from 'react';
import '../Styles/Veterinary.css';
// import vetImage from '../assets/veterinary-image.jpg'; // Import your veterinary image

function Veterinary() {
  return (
    <div className="veterinary-container">
      <div className="veterinary-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>Veterinary Services</h1>
          <p>Professional care for your livestock and farm animals</p>
        </div>
      </div>
      
      <div className="veterinary-content">
        <div className="services-section">
          <div className="services-intro">
            <h2>Complete Veterinary Care</h2>
            <p>Our team of experienced veterinarians provides comprehensive healthcare services 
              for all types of farm animals. We're committed to maintaining the health and 
              productivity of your livestock through preventative care and prompt treatment.</p>
          </div>
          
          <div className="services-details">
            <div className="service-card">
              <div className="icon-container">
                <i className="icon checkup-icon"></i>
              </div>
              <h3>Health Check-ups and Vaccinations</h3>
              <p>Regular health assessments and vaccination programs tailored to your farm's specific needs. 
                We develop customized vaccination schedules to protect your animals from common diseases 
                and ensure optimal health.</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <i className="icon prevention-icon"></i>
              </div>
              <h3>Disease Prevention and Control Strategies</h3>
              <p>Comprehensive plans to prevent disease outbreaks and limit spread if they occur. 
                Our biosecurity protocols and monitoring systems help identify potential issues before 
                they become serious problems.</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <i className="icon emergency-icon"></i>
              </div>
              <h3>Emergency Care and Consultation</h3>
              <p>24/7 emergency services for critical situations. Our veterinary team is always 
                available to provide urgent care when your animals need it most, with mobile units 
                ready to visit your farm at any time.</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
        </div>
        
        <div className="contact-section">
          <div className="contact-card">
            <h2>Need Veterinary Assistance?</h2>
            <p>Our veterinary team is available for both scheduled appointments and emergency services.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Emergency Line:</span>
                <span className="contact-value">(+250) 785098785</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">vetcare@milk-farmservice.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Hours:</span>
                <span className="contact-value">Monday-Friday: 8am-5pm<br />Weekend Emergency Service Available</span>
              </div>
            </div>
            <button className="contact-button">Schedule an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Veterinary;