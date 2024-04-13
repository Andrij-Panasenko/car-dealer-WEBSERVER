const controllerWrapper = require("../helpers");
const httpError = require("../helpers");
const fs = require("fs").promises;
const path = require("path");

const brandsPath = path.resolve(__dirname, "../carBrands.json");

const getCarBrands = async (req, res) => {
  const brands = await fs.readFile(brandsPath);

  if (!brands) throw httpError(404, "Brands not found");

  const brandList = JSON.parse(brands);
  res.status(200).json(brandList);
};

module.exports = { getCarBrands: controllerWrapper(getCarBrands) };
