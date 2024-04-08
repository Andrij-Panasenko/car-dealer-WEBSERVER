const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connected succesfuly");
    app.listen(PORT);
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
