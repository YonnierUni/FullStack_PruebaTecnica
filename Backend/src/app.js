const { favoritoModel } = require("./models/favoritoModel");
const { productoModel } = require("./models/productoModel");
const { rolModel } = require("./models/rolModel");
const { usuarioModel } = require("./models/usuarioModel");

const favoritoController = require("./controllers/favoritoController");
const productoController = require("./controllers/productoController");
const rolController = require("./controllers/rolController");
const usuarioController = require("./controllers/usuarioController");

const express = require("express");
const router = express.Router();

rolModel.hasMany(usuarioModel);
usuarioModel.belongsTo(rolModel);

usuarioModel.hasMany(favoritoModel);
favoritoModel.belongsTo(usuarioModel);

favoritoModel.belongsTo(productoModel, { onDelete: "cascade" });
productoModel.hasMany(favoritoModel, { onDelete: "cascade" });

router.use("/rol", rolController);
router.use("/usuario", usuarioController);
router.use("/producto", productoController);
router.use("/favorito", favoritoController);

module.exports = router;
