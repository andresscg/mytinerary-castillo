const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const validator = require("../controllers/validator")
const usersControllers = require("../controllers/usersControllers");
const passport = require("passport")

const { getCities, addCity, getOneCity, deleteCity, modifyCity } = citiesControllers;
const {getItineraries, addItinerary, getOneItinerary, deleteItinerary, getItinerariesByCity, modifyItinerary, likeItinerary, modifyComment} = itinerariesControllers;
const {addNewActivity, getActivitiesItinerary} = activitiesControllers;
const {addNewUser, signInUser, verifyToken} = usersControllers;

Router.route("/cities").get(getCities).post(addCity);
Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/cities/:id").get(getOneCity).delete(deleteCity).patch(modifyCity);
Router.route("/itineraries/:id").get(getOneItinerary).delete(deleteItinerary).patch(modifyItinerary);

Router.route("/itineraries/cities/:id").get(getItinerariesByCity)
Router.route("/itinerary/like/:id").put(passport.authenticate('jwt', {session:false}), likeItinerary)
Router.route("/itinerary/comments/:id").put(passport.authenticate('jwt', {session:false}), modifyComment)

Router.route("/activities/").post(addNewActivity);
Router.route("/activities/:id").get(getActivitiesItinerary);

Router.route('/users/signup').post(validator, addNewUser);
Router.route('/users/signin').post(signInUser)

Router.route('/verifyToken').get(passport.authenticate('jwt', {session:false}), verifyToken)

module.exports = Router;
