require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const passport = require("passport")
const Router = require("./routes/routes")
require("./config/passport")
require("./config/database")

const app = express();
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', Router);

app.listen(4000, () => console.log("Server is listening on port 4000"));
