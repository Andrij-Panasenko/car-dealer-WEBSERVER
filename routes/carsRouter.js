const express = require("express");
const {getCarsData, getCarBrands, getOurCustomers} = require("../controllers");
const carsRouter = express.Router();

carsRouter.get("/cars", getCarsData);
carsRouter.get("/carbrands", getCarBrands)
carsRouter.get("/customers", getOurCustomers);

module.exports = carsRouter;
