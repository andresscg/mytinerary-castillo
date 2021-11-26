import React from 'react'
import './CarouselCard.css'

const CarouselCard = (props) => {
  return (
    <div className="cardContainer" style={{backgroundImage: `url(${props.bgUrl})`}}>
      <h3 className="cardText">
        {props.cityName}
      </h3>
      <p className="cardSubtitle">
        {props.country}
      </p>
    </div>
  )
}

export default CarouselCard
