import React from 'react'
import '../styles/Itinerary.css'


const Itinerary = (props) => {
  let dollar = []
  return (
    <section className="itinerary-card">
      <div className="itinerary-container">
        <div className="author-info">
          <img src={props.authImg} alt="User" className="author-picture" />
          <p className="author-name">{props.authName}</p>
        </div>
        <div className="itinerary-info" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${props.img})`}}>
          <h2 className="itinerary-title">
            {props.title}
          </h2>
          <div className="itinerary-stats">
            <p className="itinerary-price">
              Price: {dollar.fill('💲', 0, (props.price-1)).map(e => {return e})}
            </p>
            <p className="itinerary-duration">
              Duration: {props.duration} hours
            </p>
          </div>
          <i className="far fa-heart itinerary-likes"><span className="amount-likes">{props.likes}</span></i>
          <ul className="itinerary-hashtags">
            {props.hashtags.map(hashtag => {
              return <li>#{hashtag}</li>
            })}
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
