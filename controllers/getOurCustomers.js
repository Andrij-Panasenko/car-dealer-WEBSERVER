const { controllerWrapper, httpError } = require("../helpers");

const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const getOurCustomers = async (req, res) => {
  const response = await cloudinary.api.resources({
    type: "upload",
    prefix: "cars/",
    max_results: 100,
  });

  if (!response) throw httpError(404, "Cloudinary error:");

  res.status(200).json(response.resources);
};

module.exports = controllerWrapper(getOurCustomers);
