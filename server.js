require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const Router = require("./routes/routes")
require("./config/database")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', Router);

app.listen(4000, () => console.log("Server is listening on port 4000"));
