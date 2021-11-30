import React from "react";
import '../styles/CityCard.css'

const CityCard = (props) => {
  return (
    <div
      className="cityContainer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${props.img})`,
      }}
    >
      <h3 className="text-city">
        {props.name}
      </h3>
      <h4 className="text-country">
        {props.country}
      </h4>
    </div>
  );
};

export default CityCard;
