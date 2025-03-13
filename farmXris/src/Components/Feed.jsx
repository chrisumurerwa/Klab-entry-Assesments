import React from "react";
import "../Styles/Feed.css";
import Image from "../assets/image4.jpeg";
import Image1 from "../assets/Scow.jpeg";
import Image2 from "../assets/Fcow1.jpeg";

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="feed-content">
        <div className="text-section">
          <h2>Feed Production and Nutrition Solutions</h2>
          <p className="intro">
            Helping farmers reduce feed costs and improve milk production
            through better feeding techniques.
          </p>
        </div>
        <img src={Image} alt="Cow eating grass" className="image4" />
      </div>

      <div className="produce-silage">
        <div className="silage">
          <h2>Silage and Hay Production</h2>
          <p className="intro1">
            We provide farmers with the best silage and hay production
            techniques to help them produce quality feed for their livestock.
          </p>
          <p>
            By providing proper minerals, fresh water, and quality feed, dairy
            farmers can significantly boost milk yield and improve cow health.
            Regular monitoring and adjusting feeding plans based on lactation
            stages will ensure optimal productivity and higher profitability.
          </p>
        </div>
        <img src={Image1} alt="Cow eating grass" className="Scow" />
      </div>
      <div className="cattle_nutrition">
  <div className="nutrition">
    <h2>Cattle Nutrition for higher milk</h2>
    <p className="intro2">farmers should focus on: Providing balanced feed with proper energy, protein, and fiber.</p>
    <p>Ensuring clean, fresh water is available at all times.</p>
    <p>Mineral and vitamin supplementation to support health and milk production.</p>
    <p>Monitoring and adjusting nutrition according to the lactation cycle.</p>
    <p>Probiotics and fermented feeds to enhance digestion and milk quality.</p>
  </div>
  <img src={Image2} alt="nutrition" className="cattle" />
</div>
    </div>
  );
};

export default Feed;
