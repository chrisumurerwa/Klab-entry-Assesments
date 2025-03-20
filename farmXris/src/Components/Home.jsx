import React from 'react'
import '../Styles/Home.css'
import Image from '../assets/cow.jpg'
import Image1 from '../assets/H22.jpeg';
import Image2 from '../assets/food.jpeg';
import Image3 from '../assets/H1.jpeg';
import Image4 from '../assets/milk assist.jpeg';

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <div className="content">
          <h1>We are here for you</h1>
          <p>Resources and support food for animals</p>
          <p>Free delivery of fresh milk and cheese from local farm</p>
          <p>Natural resources rural development nutrition, and related issues</p>
        </div>
      </div>
      <div className='PRO'>
        <h1>Products  when you need them</h1>
      </div>
      <div className="usda-assistance-container">
      <div className="assistance-row">
        <div className="assistance-card">
          <div className="card-header">
            <span className="card-label">DISEASE ASSISTANCE</span>
          </div>
          <div className="card-content">
            <div className="card-image disaster-image">
               <img src={Image1} alt='Assets' className='image'/>
            </div>
            <div className="card-text">
              <h2 className="card-title">
                <a href="#">We're here when cattle epidemics strike</a>
              </h2>
              <p className="card-description">
                Turn to Milk-farm to find assistance and recovery help when diseases like cattle epidemics  impact your animals.
              </p>
              <a href="#" className="card-link">
                View Recovery Resources <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="assistance-card">
          <div className="card-header">
            <span className="card-label">LOANS, GRANTS AND FUNDING</span>
          </div>
          <div className="card-content">
            <div className="card-image grants-image">
              <img src={Image2} alt='Assets' className='image'/>
            </div>
            <div className="card-text">
              <h2 className="card-title">
                <a href="#">Find Milk Assistance</a>
              </h2>
              <p className="card-description">
              "Milk farm provides measures to prevent diseases in cattle to improve their productivity and health.
              </p>
              <a href="#" className="card-link">
                Search Loans and Grants <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="assistance-row">
        <div className="assistance-card">
          <div className="card-header">
            <span className="card-label">RESEARCH AND SCIENCE</span>
          </div>
          <div className="card-content">
            <div className="card-image research-image">
            <img src={Image3} alt='Assets' className='image'/>
            </div>
            <div className="card-text">
              <h2 className="card-title">
                <a href="#">Research and Science</a>
              </h2>
              <p className="card-description">
                From fostering continued economic growth to addressing food security, the Milk-farm can
              </p>
            </div>
          </div>
        </div>

        <div className="assistance-card">
          <div className="card-header">
            <span className="card-label">FOOD ASSISTANCE</span>
          </div>
          <div className="card-content">
            <div className="card-image food-image">
            <img src={Image4} alt='Assets' className='image'/>
            </div>
            <div className="card-text">
              <h2 className="card-title">
                <a href="#">Fighting against luck of milk in Rwandan families</a>
              </h2>
              <p className="card-description">
                Milk-farm   provides measures to prevent diseases in cattle to improve their productivity and health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
    
  )
}

export default Home