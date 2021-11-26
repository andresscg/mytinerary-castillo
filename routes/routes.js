const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')

const {getCities, addCity, getOneCity} = citiesControllers;

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.get(getOneCity)

module.exports = Router;