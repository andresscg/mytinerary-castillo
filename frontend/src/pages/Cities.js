import React, { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import {Link} from 'react-router-dom'
import Loading from '../components/Loading'

import "../App.css";

const Cities = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data.response)
        setToFilter(data.response)
        setLoading(false)
      })
      .catch((err) => console.error(err));
    window.scrollTo(0, 0)  
  }, []);
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState("");
  const [toFilter, setToFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleChange = e =>{
    setFilter(e.target.value);
    filterCities(e.target.value);
  }

  const filterCities = (search) => {
    let filteredCities = cities.filter(city =>city.name.toLowerCase().startsWith(search.toLowerCase().replace(/\s/g, "")) || search === '')
    setToFilter(filteredCities);
  }

  if(loading) return (<Loading />); else return (
    <div className="cities-container">
      <video src="/assets/bg-video2.mp4" autoPlay loop muted></video>
      <input
        type="text"
        placeholder="Search for a city "
        className="cities-input"
        name="filter"
        value={filter}
        onChange={(event) => handleChange(event)}
      />
      <div className="cities-section">
        {
          toFilter.length > 0 ? toFilter.map((city) => {
            return(
              <Link to={`/cities/${city._id}`} className="card-link">
                <CityCard
                  key={`${city._id}`}
                  name={city.name}
                  country={city.country}
                  img={city.img}
                />
              </Link>
            )}) : 
              <h2 className="alert-cities">Ups! No cities were found.</h2>
          }
      </div>
    </div>
  );
};

export default Cities;
