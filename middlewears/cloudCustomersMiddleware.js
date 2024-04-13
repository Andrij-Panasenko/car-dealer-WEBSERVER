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
    const resp = await cloudinary.api.resources_by_tag("cars");

    console.log(resp);

    req.cloudinaryResources = resp.resources;
    next();
  } catch (error) {
    console.error("Cloudinary error:", error);
    next(error);
  }
};

// const storage = new

module.exports = cloudCustomersMiddleware;
