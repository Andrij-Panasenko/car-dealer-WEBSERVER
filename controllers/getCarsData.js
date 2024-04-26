const { controllerWrapper, httpError } = require("../helpers");

const Car = require("../models/car");

const getCarsData = async (req, res) => {
  const carsInfo = await Car.find();

  if (!carsInfo) throw httpError("values not found");

  res.status(200).json(carsInfo);
};

module.exports = controllerWrapper(getCarsData);
