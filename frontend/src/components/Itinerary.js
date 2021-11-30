import React from 'react'
import '../styles/Itinerary.css'


const Itinerary = () => {
  return (
    <section className="itinerary-card">
      <div className="itinerary-container">
        <div className="author-info">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="User" className="author-picture" />
          <p className="author-name">Andres Castillo</p>
        </div>
        <div className="itinerary-info">
          <h2 className="itinerary-title">
            Night in Bogotá
          </h2>
          <div className="itinerary-stats">
            <p className="itinerary-price">
              Price: 💵💵💵
            </p>
            <p className="itinerary-duration">
              Duration: 🕓🕓🕓🕓🕓
            </p>
          </div>
          <i className="far fa-heart itinerary-likes"><span className="amount-likes">0</span></i>
          <ul className="itinerary-hashtags">
            <li>#Night</li>
            <li>#City</li>
            <li>#Drinks</li>
          </ul>
        </div>
      </div>
      <button className="view-more">
        View More <i className="fas fa-angle-down"></i>
      </button>
    </section>
  )
}

export default Itinerary
