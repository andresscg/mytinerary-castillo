import React, { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import "../App.css";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
    const getAllCities = async () => {
      try {
        await props.getAllCities();
        setLoading(false);
      } catch (err) {
        props.history.push("/error");
      }
    };
    getAllCities();
  }, []);

  const handleChange = (e) => {
    props.filterCities(e.target.value);
  };

  if (loading) return <Loading />;
  const toShow =
    props.cities.length === 0 ? (
      <h2 className="alert-cities">Ups! No cities were found.</h2>
    ) : (
      props.cities.map((city) => (
        <Link to={`/cities/${city._id}`} className="card-link">
          <CityCard
            key={`${city._id}`}
            name={city.name}
            country={city.country}
            img={city.img}
          />
        </Link>
      ))
    );
  return (
    <div className="cities-container">
      <video src="/assets/bg-video2.mp4" autoPlay loop muted></video>
      <input
        type="text"
        placeholder="Search for a city "
        className="cities-input"
        name="filter"
        onChange={handleChange}
      />
      <div className="cities-section">
        {toShow}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    cities: state.cities.filteredCities
  }  
}

const mapDispatchToProps = {
  getAllCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
