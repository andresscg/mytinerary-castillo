const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersControllers = {
  addNewUser: (req, res) => {
    const {firstName, lastName, email, password, photoUrl, country, google} = req.body;
    let cryptPassword = bcryptjs.hashSync(password);
    const newUser = new User ({firstName, lastName, email, password:cryptPassword, photoUrl, country, google});
    User.findOne({email:email})
    .then(user => {
      if(user)
        throw new Error ("User already exists, sign in!")
      else {
        newUser.save()
        .then(newUser => {
          const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
          res.json({success: true, response: {firstName:newUser.firstName, lastName:newUser.lastName, photoUrl: newUser.photoUrl, token, _id:newUser._id}, error:null})
        })
        .catch(err => res.json({response:err, success:false}))
      }
    })
    .catch(err => res.json({response:null, success:false, error:err.message}))
  },
  signInUser: (req, res) => {
    const {email, password, flagGoogle} = req.body;
    User.findOne({email: email})
    .then(user => {
      let dcPassword = bcryptjs.compareSync(password, user.password)
      if(!user || !dcPassword)
        throw new Error('Incorrect email or password');
      if(user.google && !flagGoogle)
        throw new Error('Your account was created with Google, sign in using it!')
      const token = jwt.sign({...user}, process.env.SECRET_KEY)
      res.json({success: true, response:{token, firstName: user.firstName, photoUrl: user.photoUrl, _id: user._id}})
    })
    .catch(err => res.json({error: err.message, success: false}))
  },
  verifyToken: (req, res) => {
    res.json({firstName: req.user.firstName, photoUrl: req.user.photoUrl, _id: req.user._id})
  }
}

module.exports = usersControllers;