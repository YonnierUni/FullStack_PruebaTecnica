const express = require("express");
const favoritoService = require("../services/favoritoService");
const router = express.Router();

router.post("/createFavorito", favoritoService.createFavorito);
router.get(
  "/getFavoritoByUser/:idProducto&:idUsuario",
  favoritoService.getFavoritoByUser
);
router.get(
  "/getAllFavoritoByUser/:idUsuario",
  favoritoService.getAllFavoritoByUser
);
router.get(
  "/deleteFavorito/:idFavorito&:idUsuario",
  favoritoService.deleteFavorito
);
router.get("/countAllFavoritoByUser/:idUsuario", favoritoService.countAllFavoritoByUser);
router.post("/nPaginadoFavoritoByUser/", favoritoService.nPaginadoFavoritoByUser);

module.exports = router;
