const express = require("express");
const {getCarsData, getCarBrands} = require("../controllers");
const cloudCustomersMiddleware = require("../middlewears");
const carsRouter = express.Router();

carsRouter.get("/cars", cloudCustomersMiddleware, getCarsData);
carsRouter.get("/carbrands", getCarBrands)

module.exports = carsRouter;
