const express = require("express");
const favoritoService = require("../services/favoritoService");
const router = express.Router();
const { checkIfAdmin, checkIfUser } = require("../middlewares/Permissions");

router.post("/createFavorito", checkIfUser, favoritoService.createFavorito);
router.get(
  "/getFavoritoByUser/:idProducto&:idUsuario",
  checkIfUser,
  favoritoService.getFavoritoByUser
);
router.get(
  "/getAllFavoritoByUser/:idUsuario",
  checkIfUser,
  favoritoService.getAllFavoritoByUser
);
router.get(
  "/deleteFavorito/:idFavorito&:idUsuario",
  checkIfUser,
  favoritoService.deleteFavorito
);
router.get(
  "/countAllFavoritoByUser/:idUsuario",
  checkIfUser,
  favoritoService.countAllFavoritoByUser
);
router.post(
  "/nPaginadoFavoritoByUser/",
  checkIfUser,
  favoritoService.nPaginadoFavoritoByUser
);

module.exports = router;
