import React from "react";
import './City.css'

const City = (props) => {
  return (
    <div
      className="cityContainer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${props.img})`,
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

export default City;
