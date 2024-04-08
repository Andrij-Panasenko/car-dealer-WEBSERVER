const express = require("express");
const {getCarsData} = require("../controllers");
const carsRouter = express.Router();

carsRouter.get("/", getCarsData);

module.exports = carsRouter;
