const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");

const { getCities, addCity, getOneCity, deleteCity, modifyCity } = citiesControllers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/cities/:id").get(getOneCity).delete(deleteCity).patch(modifyCity);

module.exports = Router;
