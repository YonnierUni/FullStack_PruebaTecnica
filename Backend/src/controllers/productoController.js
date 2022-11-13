const express = require("express");
const productoService = require("../services/productoService");
const router = express.Router();

router.post("/createProducto", productoService.createProducto);
router.get("/getProducto/:idProducto", productoService.getProducto);
router.get("/getAllProductos", productoService.getAllProductos);
router.post("/updateProducto", productoService.updateProducto);
router.get("/deleteProducto/:idProducto", productoService.deleteProducto);
router.get("/countProductos/", productoService.countProductos);
router.post("/nPaginadoProductos/", productoService.nPaginadoProductos);

module.exports = router;
