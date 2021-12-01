const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  title: {type:String, required:true},
  duration: {type:Number, required:true},
  price: {type:Number, required:true},
  author: {
    name: {type:String, required:true},
    imgUrl: {type:String, required:true}
  },
  img: {type:String, required:true},
  likes: {type:Number, required:true},
  hashtags: {type:Array},
  city: {type:String, required:true}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;