const City = require("../models/City")

const citiesControllers = {
  getCities: async(req, res) => {
    let cities;
    try{
      cities = await City.find()
    }catch(err){
      console.error(err);
    }  
    res.json({response: cities, success:true})
  },
  addCity: async(req, res) => {
    const {name, country, img} = req.body
    let city;
    try{
      city = await new City({name, country, img}).save()
    }catch(err){
      console.error(err);
    }  
    res.json({success:true});
  },
  getOneCity: async(req, res) => {
    const id = req.params.id;
    let city;
    try{
      city = await City.findById(id)
    }catch(err){
      console.error(err);
    }
    res.json({response:city, success:true});
  },
  deleteCity: async(req, res) => {
    const id = req.params.id;
    let city;
    try{
      city = await City.findByIdAndDelete(id)
    }catch(err){
      console.error(err);
    }  
    res.json({success:true});
  },
  modifyCity: async(req, res) => {
    const id = req.params.id;
    const value = req.body
    let city;
    try{
      city = await City.findByIdAndUpdate(id, value, {new:true})
    }catch(err){
      console.error(err);
    }
    res.json({response: city, success:true});
  }
}

module.exports = citiesControllers;