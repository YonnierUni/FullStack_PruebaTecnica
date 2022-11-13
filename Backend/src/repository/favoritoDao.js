const { Op } = require("sequelize");
const { favoritoModel } = require("../models/favoritoModel");
const { productoModel } = require("./productoDao");

async function createFavorito(favorito) {
  const newFavorito = await favoritoModel.create(favorito);
  return newFavorito;
}

async function getFavoritoByUser(aux) {
  const favorito = await favoritoModel.findOne({
    attributes: ["id", "createdAt"],
    where: { idUsuario: aux.idUsuario, idProducto: aux.idProducto },
    include: [{ model: productoModel }],
  });
  return favorito;
}

async function getAllFavoritoByUser(idUsuario) {
  const favoritos = await favoritoModel.findOne({
    attributes: ["id", "createAt"],
    where: { idUsuario: idUsuario },
    include: [{ model: productoModel }],
  });
  return favoritos;
}

async function deleteFavorito(aux) {
  const favorito = await favoritoModel.destroy({
    where: { idUsuario: aux.idUsuario, idProducto: aux.idProducto },
  });
  return favorito;
}
async function nPaginadoFavoritoByUser(datos) {
  let prods = await favoritoDao.findAll({
    limit: datos.itemsPerPage,
    offset: datos.itemsPerPage * (datos.currentPage - 1),
    where: { idUsuario: datos.idUsuario },
    include: {
      model: productoModel,
    },
    order: [["createdAt", "DESC"]],
  });
  return prods;
}
const favoritoDao = {
  createFavorito,
  getFavoritoByUser,
  getAllFavoritoByUser,
  deleteFavorito,
  nPaginadoFavoritoByUser,
};

module.exports = favoritoDao;
