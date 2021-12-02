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
          All Itineraries
        </h2>
        {props.itineraries.map(itinerary => {
          return(
            <Itinerary authImg={itinerary.author.imgUrl} authName={itinerary.author.name} title={itinerary.title} img={itinerary.img} price={itinerary.price} duration={itinerary.duration} likes={itinerary.likes} hashtags={itinerary.hashtags}/>
          )
        })}
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
