const { controllerWrapper, httpError } = require("../helpers");

const Car = require("../models/car");

const getCarsData = async (req, res) => {
  const { limit } = req.query;

  const carsInfo = await Car.find().limit(limit);
  const count = await Car.countDocuments();

  if (!carsInfo) throw httpError("values not found");

  res.status(200).json({carsInfo, count});
};

module.exports = controllerWrapper(getCarsData);
