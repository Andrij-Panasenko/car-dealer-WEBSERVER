const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const cloudCustomersMiddleware = async (req, res, next) => {
  try {
    const resourses = await cloudinary.api.resources({
      type: "upload",
      prefix: "cars/",
      max_results: 100,
    });

    req.cloudinaryResources = resourses;
    next();
  } catch (error) {
    console.error("Cloudinary error:", error);
    next(error);
  }
};

module.exports = cloudCustomersMiddleware;