const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getItineraries: async (req, res) => {
    let itineraries;
    try {
      itineraries = await Itinerary.find();
    } catch (err) {
      console.error(err);
    }
    res.json({ response: itineraries, success: true });
  },
  addItinerary: async (req, res) => {
    const itinerary = req.body;
    let response;
    try {
      response = await new Itinerary(itinerary).save();
    } catch (err) {
      console.error(err);
    }
    res.json({ response: response, success: true });
  },
  getOneItinerary: async (req, res) => {
    const id = req.params.id;
    let itinerary;
    try {
      itinerary = await Itinerary.findById(id);
    } catch (err) {
      console.error(err);
    }
    res.json({ response: itinerary, success: true });
  },
  deleteItinerary: async (req, res) => {
    const id = req.params.id;
    let itinerary;
    try {
      itinerary = await Itinerary.findByIdAndDelete(id);
    } catch (err) {
      console.error(err);
    }
    res.json({ success: true });
  },
  getItinerariesByCity: async (req, res) => {
    const id = req.params.id;
    let itineraries;
    try {
      itineraries = await Itinerary.find({ city: id });
    } catch (err) {
      console.error(err);
    }
    res.json({ response: itineraries, success: true });
  },
  modifyItinerary: async (req, res) => {
    const id = req.params.id;
    const value = req.body;
    let itinerary;
    try {
      itinerary = await Itinerary.findByIdAndUpdate(id, value, { new: true });
    } catch (err) {
      console.error(err);
    }
    res.json({ response: itinerary, success: true });
  },
  likeItinerary: (req, res) => {
    Itinerary.findOne({ _id: req.params.id }).then((itinerary) => {
      if (itinerary.likes.includes(req.user._id)) {
        Itinerary.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { likes: req.user._id } },
          { new: true }
          ).then((newItinerary) =>
          res.json({ response: newItinerary.likes, success: true })
        ).catch(err => console.log(err));
      }else{
        Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user._id}},{new:true})
        .then(newItinerary => res.json({ response: newItinerary.likes, success:true}))
        .catch(err => console.log(err));
      }
    }).catch(err => res.json({ response: req.params.id, success: false}));
  },
};

module.exports = itinerariesControllers;
