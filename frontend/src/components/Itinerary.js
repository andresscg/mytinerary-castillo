import React, {useState} from 'react'
import '../styles/Itinerary.css'


const Itinerary = (props) => {
  let dollar = ['','','','','']
  const {author, title, duration, price, _id, img, likes, hashtags} = props.data;
  const [isOpen, setOpen] = useState(false);
  const handleClick =  () => setOpen(!isOpen);
  return (
    <section className="itinerary-card" key={_id}>
      <div className="itinerary-container">
        <div className="author-info">
          <img src={author.imgUrl} alt="User" className="author-picture" />
          <p className="author-name">{author.name}</p>
        </div>
        <div className="itinerary-info" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${img})`}}>
          <h2 className="itinerary-title">
            {title}
          </h2>
          <div className="itinerary-stats">
            <p className="itinerary-price">
              Price: {dollar.fill('💲', 0, (price)).map(e => {return e})}
            </p>
            <p className="itinerary-duration">
              Duration: {duration} hours
            </p>
          </div>
          <i className="far fa-heart itinerary-likes"><span className="amount-likes">{likes}</span></i>
          <ul className="itinerary-hashtags">
            {hashtags.map((hashtag, i) => {
              return <li key={i}>#{hashtag}</li>
            })}
          </ul>
        </div>
      </div>
      <div className={isOpen ? 'activities-display' : 'itinerary-activities'}>
        <h3 className="activities-title" style={{display: isOpen ? 'block' : 'none'}}>Activities</h3>
        
      </div>
      <button className="view-more" onClick={handleClick}>
        View More <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i>
      </button>
    </section>
  )
}

export default Itinerary
