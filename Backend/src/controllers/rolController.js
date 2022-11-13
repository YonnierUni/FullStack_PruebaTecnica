const express = require("express");
const rolService = require("../services/rolService");
const router = express.Router();

router.get("/getAllRol", rolService.getAllRol);

module.exports = router;
