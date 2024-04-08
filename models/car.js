const { Schema, model } = require("mongoose");

const carSchema = Schema({
    name: String,
})

const Car = model("car", carSchema)

module.exports = Car;