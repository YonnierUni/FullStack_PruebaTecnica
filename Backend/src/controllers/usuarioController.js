const express = require("express");
const usuarioService = require("../services/usuarioService");
const router = express.Router();
const { checkIfAdmin, checkIfUser } = require("../middlewares/Permissions");

router.post("/createUser", usuarioService.createUser);
router.post("/loginUser", usuarioService.loginUser);
router.post("/getUser", usuarioService.getUser);

module.exports = router;
