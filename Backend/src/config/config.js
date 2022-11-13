const { Sequelize } = require("sequelize");

const db = new Sequelize("pruebatecnicadb", "Yonnier", "The.love123", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

db.authenticate()
  .then(() => {
    console.log("Conexión de la DB correcta");
  })
  .catch(() => {
    console.log("Falló la conexión con la DB");
  });

module.exports = { DB: db };
