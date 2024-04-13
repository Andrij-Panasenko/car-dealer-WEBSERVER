const express = require("express");
const {getCarsData} = require("../controllers");
const cloudCustomersMiddleware = require("../middlewears");
const carsRouter = express.Router();

carsRouter.get("/", cloudCustomersMiddleware, getCarsData);
carsRouter.get("/carbrands", getCarBrands)

module.exports = carsRouter;
