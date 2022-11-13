const sequelize = require("sequelize");
const { DB } = require("../config/config");

const rol = DB.define("rol", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: sequelize.STRING, allowNull: false },
});

module.exports = { rolModel: rol };
