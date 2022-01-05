require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const passport = require("passport")
const Router = require("./routes/routes")
const path = require("path")
require("./config/passport")
require("./config/database")

const app = express();
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', Router);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
  })
}

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log("Server is listening"));
