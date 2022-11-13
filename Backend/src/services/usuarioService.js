const usuarioDao = require("../repository/usuarioDao");
const tokenKey = "keyPrueba";
const jwt = require("jsonwebtoken");

const CryptoJS = require("crypto-js");
const secretPass = "KeyPrueba";

async function createUser(req, res) {
  try {
    let newUser = {
      correo: req.body.correo,
      contrasena: CryptoJS.DES.encrypt(
        req.body.contrasena,
        secretPass
      ).toString(),
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      rolId: 2,
    };
    console.log(newUser);
    if (
      newUser.correo != null &&
      newUser.contrasena != null &&
      newUser.nombres != null &&
      newUser.apellidos != null
    ) {
      newUser = await usuarioDao.createUser(newUser);
      res.send(
        newUser
          ? { ms: "Se creó correctamente" }
          : { ms: "No se creó el usuario (El correo ya existe)" }
      );
    } else {
      res.send({ ms: "Faltan datos" });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function loginUser(req, res) {
  try {
    let aux = {
      correo: req.body.correo,
      contrasena: req.body.contrasena,
    };
    aux = await usuarioDao.loginUser(aux);
    aux
      ? jwt.sign({ token: aux }, tokenKey, (err, token) => {
          res.send({
            token,
          });
        })
      : res.send({ ms: "No se encontró el usuario" });
  } catch (error) {
    res.send({ ms: error + " error catch" });
    console.log({ ms: error + " error catch" });
  }
}
async function getUser(req, res) {
  try {
    let tokenA = req.body.tokk;
    console.log(tokenA);

    let aux = jwt.decode(tokenA, tokenKey);

    if (aux == null) {
      res.send({ ms: "No se encontró el usuario" });
    } else {
      console.log("aux");
      console.log(aux.token);
      res.send(aux.token);
    }
  } catch (error) {
    res.send({ ms: error + " error catch" });
    console.log({ ms: error + " error catch" });
  }
}

const usuarioService = { createUser, loginUser, getUser };

module.exports = usuarioService;
