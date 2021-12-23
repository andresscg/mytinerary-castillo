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
  likes: {type:Array},
  comments: [{
    comment: {type:String},
    user: {type: mongoose.Types.ObjectId, ref:"user"}
  }],
  hashtags: {type:Array},
  city: {type:mongoose.Types.ObjectId, ref:"City", required:true}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;