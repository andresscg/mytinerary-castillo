const Itinerary = require('../models/Itinerary');

const itinerariesControllers = {
  getItineraries: async(req, res) => {
    let itineraries;
    try{
      itineraries = await Itinerary.find()
    }catch(err){
      console.error(err);
    }
    res.json({response: itineraries, success:true});
  },
  addItinerary: async(req, res) => {
    const itinerary = req.body;
    let response;
    try {
      response = await new Itinerary(itinerary).save();
    }catch(err){
      console.error(err);
    }
    res.json({response: response, success:true})
  },
  getOneItinerary: async(req, res) => {
    const id = req.params.id;
    let itinerary;
    try{
      itinerary = await Itinerary.findById(id)
    }catch(err){
      console.error(err);
    }
    res.json({response:itinerary, success:true});
  },
  deleteItinerary: async(req, res) => {
    const id = req.params.id;
    let itinerary;
    try{
      itinerary = await Itinerary.findByIdAndDelete(id)
    }catch(err){
      console.error(err);
    }  
    res.json({success:true});
  }
}

module.exports = itinerariesControllers;