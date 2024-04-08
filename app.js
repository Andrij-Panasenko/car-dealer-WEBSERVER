const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const carsRouter = require('./routes/carsRouter');

require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"));

app.use("/api/cars", carsRouter)

// app.use((_, res) => {
//     res.status(404).json({message: "Route not found"})
// })
 
// app.use((err, req, res, next) => {
//     const { status = 500, message = "Server error" } = err;
//     res.status(status).json({message})
// })

module.exports = app;