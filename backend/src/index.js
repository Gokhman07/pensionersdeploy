
require("dotenv").config();
require("./database");
require("./models");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const urlEncoderParser = bodyParser.urlencoded({ extended: false });
const compression = require("compression");
const  cookieParser = require('cookie-parser')

const pensioners=require("./router/pensioners")
const risk_insurances=require("./router/risk_insurances")
const pension_funds = require("./router/pension_funds")
const app = express();
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(compression());

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(urlEncoderParser); 


app.use("/pensioner",pensioners)
app.use("/risk_insurances",risk_insurances)
app.use("/pension_funds",pension_funds)

app.listen(8848)