import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

const City = () => {
  const location = useLocation();
  let endpoint = "http://localhost:4000/api" + location.pathname;
  const [city, setCity] = useState({});
  useEffect(() => {
    axios.get(endpoint).then((res) => setCity(res.data.response));
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
      <h2 className="alert">Under construction, come back later!</h2>
      <Button path="/cities">Back to cities</Button>
    </div>
  );
};

export default City;
