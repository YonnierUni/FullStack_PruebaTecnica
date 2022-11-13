const sequelize = require("sequelize");
const { DB } = require("../config/config");

const producto = DB.define("producto", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: sequelize.STRING, allowNull: false },
  rubro: { type: sequelize.STRING, allowNull: false },
  marca: { type: sequelize.STRING, allowNull: false },
  proveedor: { type: sequelize.STRING, allowNull: false },
  precio: { type: sequelize.FLOAT, allowNull: false },
});

module.exports = { productoModel: producto };
