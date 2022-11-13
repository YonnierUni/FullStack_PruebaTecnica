const express = require("express");
const usuarioService = require("../services/usuarioService");
const router = express.Router();

router.post("/createUser", usuarioService.createUser);
router.post("/loginUser", usuarioService.loginUser);
router.post("/getUser", usuarioService.getUser);

module.exports = router;
