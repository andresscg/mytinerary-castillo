import React, { useEffect, useState } from "react";
import City from "../City";
import '../../App.css'

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((err) => console.error(err));
  }, []);

  const filterCities = () => {
    
  }

  return (
    <div className="cities-container">
      <video src="/assets/bg-video2.mp4" autoPlay loop muted></video>
      <input type="text" placeholder="Search for a city " className="cities-input" />
      <div className="cities-section">
        {cities.map((city) => {
          return (
            <City key={`${city._id}`} name={city.name} country={city.country} img={city.img}/>
          );
        })}
      </div>
    </div>
  );
};

export default Cities;
