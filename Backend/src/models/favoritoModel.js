const sequelize = require("sequelize");
const { DB } = require("../config/config");

const favorito = DB.define("favorito", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = { favoritoModel: favorito };
