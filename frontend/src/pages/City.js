import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Button from "../components/Button";
import Loading from "../components/Loading";
import Itinerary from '../components/Itinerary'


const City = (props) => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
    if(!props.cities.length){
      props.history.push('/cities');
      return false;
    }
    const getCityAndItineraries = async() => {
      try{
        await props.getOneCity(props.match.params.id)
        await props.getItinerariesByCity(props.match.params.id)
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    }
    getCityAndItineraries()
  }, []);

  const toShow = props.itineraries.length === 0
  ? <div className="no-itineraries">
      <h3 className="no-itineraries__text">Ups! We don't have any itineraries for this city yet.</h3>
      <i className="fas fa-sad-tear sad-face"></i>
    </div>
  : props.itineraries.map(itinerary => {
    return(
      <Itinerary data={itinerary} key={itinerary._id}/>
    )
  })

  if(loading){
    return (<Loading/>)
  }
  return (
    <div className="city-container">
      <div
        className="city-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.city.img})`,
        }}
      >
        <h1 className="city-name">{props.city.name}</h1>
        <h2 className="city-country">{props.city.country}</h2>
      </div>
      <div className="itineraries-section">
        <h2 className="itineraries-section--title">
          Look for your next adventure!
        </h2>
        {toShow}
        <Button path="/cities">Back to cities</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.cities.newCity,
    cities: state.cities.allCities,
    itineraries: state.itineraries.itinerariesByCity
  }
}

const mapDispatchToProps = {
  getOneCity: citiesActions.getOneCity,
  getItinerariesByCity: itinerariesActions.getItinerariesByCity
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
