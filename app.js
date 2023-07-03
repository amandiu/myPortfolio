const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routers/portfolio.route");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",router)

module.exports = app;
