const express = require("express");
const productoService = require("../services/productoService");
const router = express.Router();
const { checkIfAdmin, checkIfUser } = require("../middlewares/Permissions");

router.post("/createProducto", checkIfAdmin, productoService.createProducto);
router.get("/getProducto/:idProducto", productoService.getProducto);
router.get("/getAllProductos", productoService.getAllProductos);
router.post("/updateProducto", checkIfAdmin, productoService.updateProducto);
router.get(
  "/deleteProducto/:idProducto",
  checkIfAdmin,
  productoService.deleteProducto
);
router.get("/countProductos/", productoService.countProductos);
router.post("/nPaginadoProductos/", productoService.nPaginadoProductos);

module.exports = router;
