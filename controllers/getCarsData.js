const { controllerWrapper, httpError } = require("../helpers");

const Car = require("../models/car");

const getCarsData = async (req, res) => {
  const carsInfo = await Car.find();

  if (!carsInfo) throw httpError("values not found");

  const data = carsInfo.concat(req.cloudinaryResources);

  res.status(200).json(data);
};

module.exports = controllerWrapper(getCarsData);
