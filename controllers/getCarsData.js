// const { controllerWrapper } = require("../helpers");
const {controllerWrapper } = require("../helpers")

const Car = require("../models/car");

const getCarsData = async (req, res) => {
  const data = await Car.find();

  if (!data) throw new Error("values not found");

  res.status(200).json(data);
};

module.exports = controllerWrapper(getCarsData);
