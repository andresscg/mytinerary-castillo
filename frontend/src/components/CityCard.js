import React from 'react'
import './CityCard.css'

const CityCard = (props) => {
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

export default CityCard
