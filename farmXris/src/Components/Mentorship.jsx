import React from "react";
import '../Styles/Mentorship.css'
import Meback from "../Assets/Mentback.jpeg";
import Image1 from "../assets/m1.jpg";
import Image2 from "../assets/m2.jpg";
import Image3 from "../assets/m3.jpg";
const Mentorship = () => {
  return (
    <div className="mentorship">
      {/* Hero Section */}
      

<div className="hero" style={{ backgroundImage: `url(${Meback})` }}>
  <h1>Empowering Dairy Farmers for a Sustainable Future</h1>
  <h4>Join our mentorship program to transform your dairy farming journey.</h4>
  <button className="Button">Apply Now</button>
</div>
    

<div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About the Program</h1>
          <p className="about-description">
            Our mentorship program helps dairy farmers move beyond traditional 
            methods, embrace innovative business approaches, and implement 
            sustainable farming practices for long-term success.
          </p>
          
          <div className="core-learning">
            <h2 className="core-title">Core Learning Areas</h2>
            <h3 className="core-subtitle">Transforming Traditional Grazing Mindsets</h3>
            <p className="core-description">
              Learn modern pasture management and efficient feeding systems.
            </p>
          </div>
          
          <div className="key-features">
            <div className="feature">
              <h3>Expert Training Programs</h3>
              <p>Zero-grazing systems, breed improvement, and modern farming techniques</p>
            </div>
            
            <div className="feature">
              <h3>Quality Breed Services</h3>
              <p>Artificial insemination and genetic improvement programs</p>
            </div>
            
            <div className="feature">
              <h3>Feed Production Solutions</h3>
              <p>Reduce costs and optimize nutrition for higher milk yields</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="mentors-section">
    <h2>Meet Our Mentors</h2>
      <div className="mentors-container">
    

        <div className="mentor-card">
       
          <div className="mentor-image-container">
              <img src={Image1} alt='Assets' className='image1'/>
          </div>
          <h3 className="mentor-name">Walter White</h3>
          <p className="mentor-title">Sustainable Farming Specialist</p>
          <p className="mentor-description">
          <p>A Sustainable Farming Specialist on a milk farm focuses </p>
          <p>on improving dairy farming practices while protecting the environment.</p>
            <p> They work on sustainable milk production by promoting organic feed,</p>
          </p>
        </div>

        <div className="mentor-card">
          <div className="mentor-image-container">
             <img src={Image2} alt='Assets' className='image1'/>
          </div>
          <h3 className="mentor-name">Sarah Jhinson</h3>
          <p className="mentor-title">Expert in Dairy Business Management</p>
          <p className="mentor-description">
          <p> dairy business depends on proper management, strategic investment,</p>
          <p>and continuous improvement in milk production and quality standards.</p> 
          </p>
        </div>

        <div className="mentor-card">
          <div className="mentor-image-container">
             <img src={Image3} alt='Assets' className='image1'/>
          </div>
          <h3 className="mentor-name">William Anderson</h3>
          <p className="mentor-title">Marketing</p>
          <p className="mentor-description">
          <p>marketing is crucial for the success of a milk farm project. </p>
          <p>It involves identifying target customers  </p>
         <p>promoting milk products, and ensuring efficient distribution</p>
          </p>
        </div>
    </div>



     
      
    </div>
    </div>
  );
};

export default Mentorship;
