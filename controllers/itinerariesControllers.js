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
      itineraries = await Itinerary.find({ city: id }).populate("comments.user");
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
  modifyComment: async (req, res) => {
    switch(req.body.type) {
      case "addComment":
        try{
          let newComment = await Itinerary.findOneAndUpdate({_id:req.params.id}, {$push:{comments:{comment:req.body.comment, user:req.user._id}}}, {new:true}).populate('comments.user')
          if(newComment){
            res.json({success:true, response:newComment.comments})
          }else{
            throw new Error("Problem posting comment")
          }
        }catch(err){
          res.json({response:err.message, success:false})
        }
        break;
      case "editComment":
        try{
          let updatedComment = await Itinerary.findOneAndUpdate({"comments._id":req.params.id}, {$set:{"comments.$.comment": req.body.comment}},{new:true}).populate('comments.user')
          if(updatedComment){
            res.json({response:updatedComment.comments, success:true})
          }else{
            throw new Error("Problem edting comment")
          }
        }catch(err){
          res.json({response:err, success:false})
        }
        break;
      case "deleteComment": 
        console.log(req.body)
        try{
          let deletedComment = await Itinerary.findOneAndUpdate({"comments._id":req.body.commentId}, {$pull:{comments:{_id:req.body.commentId}}}).populate('comments.user')
          if(deletedComment){
            res.json({success:true})
          }else{
            throw new Error("Problem deleting comment")
          }
        }catch(err){
          res.json({success:false, response:err})
        }
        break;
    }
  }
};

module.exports = itinerariesControllers;
