import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import Itinerary from '../components/Itinerary'


const City = () => {
  const location = useLocation();
  let endpoint = "http://localhost:4000/api" + location.pathname;
  const [city, setCity] = useState({});
  useEffect(() => {
    axios.get(endpoint).then((res) => setCity(res.data.response));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="city-container">
      <div
        className="city-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${city.img})`,
        }}
      >
        <h1 className="city-name">{city.name}</h1>
        <h2 className="city-country">{city.country}</h2>
      </div>
      <div className="itineraries-section">
        <h2 className="itineraries-section--title">
          All Itineraries
        </h2>
        <Itinerary />
        <Button path="/cities">Back to cities</Button>
      </div>
    </div>
  );
};

export default City;
