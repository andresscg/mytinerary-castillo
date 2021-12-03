const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");

const { getCities, addCity, getOneCity, deleteCity, modifyCity } = citiesControllers;
const {getItineraries, addItinerary, getOneItinerary, deleteItinerary, getItinerariesByCity, modifyItinerary} = itinerariesControllers;

Router.route("/cities").get(getCities).post(addCity);
Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/cities/:id").get(getOneCity).delete(deleteCity).patch(modifyCity);
Router.route("/itineraries/:id").get(getOneItinerary).delete(deleteItinerary).patch(modifyItinerary);

Router.route("/itineraries/cities/:id").get(getItinerariesByCity)
module.exports = Router;
