import React from 'react';
import '../Styles/Farming.css';
import Image1 from '../assets/p1.png';
import Image2 from '../assets/p2.png';
import Image3 from '../assets/p3.png';
import Image4 from '../assets/milk.jpeg';
import Image5 from'../assets/cheese.jpeg';
import Image6 from '../assets/special cheese.jpeg';
import Image7 from '../assets/milkbottle.jpg';
const Farming = () => {
  return (
    <div className="farming-container">
      <h1 className="title">WELCOME TO OUR FARM</h1>
      
      <div className="info-section">
        <div className="info-card">
         <img src={Image1} alt='contact' className='image'/>
         
         
          <h3>OUR PRODUCTS</h3>
          <p>We provide our customers with a wide variety of dairy products, from  milk-farm to butter and cheese.</p>
          <button>READ MORE</button>
        </div>
        <div className="info-card">
         <img src={Image2} alt='contact' className='image'/>
          <h3>WHY MILK-FARM?</h3>
          <p>We believe it's the best way to inspire our community to try useful & natural products, which we hope they like.</p>
          <button>READ MORE</button>
        </div>
        <div className="info-card">
         <img src={Image3} alt='contact' className='image'/>
          <h3>WORKING PROCESS</h3>
          <p>Our working process includes a few elements based on both traditional and innovative dairy farming approaches.</p>
          <button>READ MORE</button>
        </div>
      </div>

      <h2 className="sub-title">NEW PRODUCTS</h2>
      <div className="product-section">
        <div className="product-card">
        <img src={Image4} alt='contact' className='image'/>
        <p className="product-name">Milk</p>
        
        
        </div>
        <div className="product-card">
        <img src={Image5} alt='contact' className='image'/>
        <p className="product-name">Cheese milk</p>
        </div>
        <div className="product-card">
        <img src={Image6} alt='contact' className='image'/>
        <p className="product-name">Special cheese</p>
        </div>
        <div className="product-card">
        <img src={Image7} alt='contact' className='image'/>
        <p className="product-name">Meadow Milk</p>
        </div>
      </div>
    </div>
  );
};

export default Farming;
