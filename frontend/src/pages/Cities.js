import React, { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import {Link} from 'react-router-dom'
import "../App.css";

const Cities = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((err) => console.error(err));
  }, []);
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <div className="cities-container">
      <video src="/assets/bg-video2.mp4" autoPlay loop muted></video>
      <input
        type="text"
        placeholder="Search for a city "
        className="cities-input"
        name="filter"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <div className="cities-section">
        {cities.filter(city => city.name.toLowerCase().startsWith(filter.toLowerCase().replace(/\s/g, "")) || filter === '')
          .map((city) => {
            return cities.length > 0 ? (
              <Link to={`/cities/${city._id}`} className="card-link">
                <CityCard
                  key={`${city._id}`}
                  name={city.name}
                  country={city.country}
                  img={city.img}
                />
              </Link>
            ) : (
              <h1>Ups! No cities were found by that name.</h1>
            );
          })}
      </div>
    </div>
  );
};

export default Cities;
