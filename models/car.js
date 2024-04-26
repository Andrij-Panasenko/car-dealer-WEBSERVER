const { Schema, model } = require("mongoose");

const carSchema = Schema({
  make: String,
  model: String,
  barrels: Number,
  cylinders: Number,
  drive: String,
  eng_dscr: String,
  fueltype: String,
  id: String,
  trany: String,
  vclass: String,
  year: String,
  basemodel: String,
});

const Car = model("car", carSchema)

module.exports = Car;