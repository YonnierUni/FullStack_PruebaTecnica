const { rolModel } = require("../models/rolModel");

async function getAllRol() {
  const rols = await rolModel.findAll();
  return rols;
}

const rolDao = { getAllRol };

module.exports = rolDao;
