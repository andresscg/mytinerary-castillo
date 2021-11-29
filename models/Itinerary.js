const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  name: {type:String, required:true},
  duration: {type:Number, required:true},
  price: {type:Number, required:true},
  author: {type:String, required:true}
})