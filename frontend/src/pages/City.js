import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Button from "../components/Button";
import Loading from "../components/Loading";
import Itinerary from '../components/Itinerary'


const City = (props) => {
  const city = useSelector(state => state.cities.newCity)
  const cities = useSelector(state => state.cities.allCities)
  const itineraries = useSelector(state => state.itineraries.itinerariesByCity)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
    if(!cities.length){
      props.history.push('/cities');
      return false;
    }
    try{
      dispatch(citiesActions.getOneCity(props.match.params.id))
      dispatch(itinerariesActions.getItinerariesByCity(props.match.params.id))
      setLoading(false)
    }catch(err){
      props.history.push('/error')
      console.log(err)
    }
  }, []);

  const toShow = itineraries.length === 0
  ? <div className="no-itineraries">
      <h3 className="no-itineraries__text">Ups! We don't have any itineraries for this city yet.</h3>
      <i className="fas fa-sad-tear sad-face"></i>
    </div>
  : itineraries.map(itinerary => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${city.img})`,
        }}
      >
        <h1 className="city-name">{city.name}</h1>
        <h2 className="city-country">{city.country}</h2>
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

export default City;
