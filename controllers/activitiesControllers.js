const Activity = require('../models/Activity')

const activitiesControllers = {
  addNewActivity: async(req, res) => {
    console.log(req.body)
    const newActivity = new Activity({...req.body});
    try{
      await newActivity.save()
      .then(() => res.json({success:true}));
    }catch(err){
      res.json({success:false, response:err});
    }
  },
  getActivitiesItinerary: async(req, res) => {
    try{
      Activity.find({itinerary: req.params.id})
      .then(activities => res.json({success:true, response:activities}))
    }catch(err){
      res.json({success:false, response:err.message});
    }
  }
}

module.exports = activitiesControllers