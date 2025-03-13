import React from 'react'
import '../Styles/Contact.css';
import Image from '../assets/Cimage.jpeg';
import Image1 from '../assets/image1.jpeg';
import Image2 from '../assets/image2.jpeg';

function Contact () {
  return (
    <div className='contact'>
      <h1>Contact us </h1>
      <p>Thank you for your interest in milk-farm! Whether you have a question, feedback, or partnership inquiry, we’re here to assist you. Please feel free to reach out to us using the contact information below:</p>
      <div className='info'>
      <h2>Email:</h2>
      <p>milkfarm@gmail.com</p>
      <h2>Address:</h2>
      <p>Kigali Rwanda, Ny</p>
      </div>
      <div className='form '>
        <p>Alternatively, you can fill out the contact form below, and a member of our team</p>
        <p> will get back to you as soon as possible. We look forward to hearing from you and </p>
        <p>assisting you on your journey to explore the legends, lands, and legacies of </p>
          <p>Africa!</p>
          
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Phone Number" className="input-field" />
          <input type="text" placeholder="How Did You Hear About Us?" className="input-field" />
        </div>
        <textarea placeholder="Message" className="textarea-field"></textarea>
        <button type="submit" className="submit-btn">Send</button>
      </form>
    
      </div>
      <div className='image'>
     <img src={Image1} alt='contact' className='image'/>
     <img src={Image2} alt='contact'className='image'/>
    
     </div>
     <div className='order'>
      <h1>Want to make order  ?</h1>
      <p>Affordable  Cheap price and text with us on </p> 
        <p>www.milk-farm.com or milk-farm@gmail.com</p>
      <button type="submit" className="connect">connect with us</button>
     </div>
      </div>
  )
}
export default Contact;