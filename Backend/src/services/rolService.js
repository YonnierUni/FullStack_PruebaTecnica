const rolDao = require("../repository/rolDao");

async function getAllRol(req, res) {
  try {
    aux = await rolDao.getAllRol();
    res.send(aux);
  } catch (error) {
    res.send({ ms: error });
  }
}

const rolService = { getAllRol };

module.exports = rolService;
