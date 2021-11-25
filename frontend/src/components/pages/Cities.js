import React, { useEffect, useState } from "react";
import City from "../City";
import "../../App.css";

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
        {cities
          .filter(
            (city) =>
              filter ===
                city.name
                  .toLowerCase()
                  .split("")
                  .slice(0, filter.length)
                  .join("") || filter === ""
          )
          .map((city) => {
            return cities.length > 0 ? (
              <City
                key={`${city._id}`}
                name={city.name}
                country={city.country}
                img={city.img}
              />
            ) : (
              <h1>Ups! No cities were found by that name.</h1>
            );
          })}
      </div>
    </div>
  );
};

export default Cities;
