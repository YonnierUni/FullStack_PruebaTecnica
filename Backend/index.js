const { DB } = require("./src/config/config");
const express = require("express");
const server = express();
const morgan = require("morgan");
const bodyParse = require("body-parser");
const app = require("./src/app");
server.use(bodyParse.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParse.json({ limit: "50mb" }));
server.listen(3000);
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", app);

DB.sync()
  .then(() => {
    server.listen(5248, console.log("Listening al 5248"));
  })
  .catch((error) => {
    console.error(error);
  });
