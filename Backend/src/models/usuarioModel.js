const sequelize = require("sequelize");
const { DB } = require("../config/config");

const usuario = DB.define("usuario", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  correo: { type: sequelize.STRING, allowNull: false },
  nombres: { type: sequelize.STRING, allowNull: false },
  apellidos: { type: sequelize.STRING, allowNull: false },
  contrasena: { type: sequelize.STRING, allowNull: false },
});

module.exports = { usuarioModel: usuario };
