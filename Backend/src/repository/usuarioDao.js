const { Op } = require("sequelize");
const { usuarioModel } = require("../models/usuarioModel");
const { rolModel } = require("../models/rolModel");

const CryptoJS = require("crypto-js");
const secretPass = "KeyPrueba";

async function createUser(user) {
  let aux = await usuarioModel.findOne({
    where: { correo: user.correo },
  });
  if (aux == null) {
    const newUser = await usuarioModel.create(user);
    return newUser;
  } else {
    return null;
  }
}

async function loginUser(aux) {
  let userA = await usuarioModel.findOne({
    attributes: ["contrasena"],
    where: { correo: aux.correo },
  });

  if (userA == null) {
    return null;
  }
  if (
    aux.contrasena !=
    CryptoJS.DES.decrypt(userA.contrasena, secretPass).toString(
      CryptoJS.enc.Utf8
    )
  ) {
    return null;
  }
  const user = await usuarioModel.findOne({
    attributes: ["id", "correo", "nombres", "apellidos"],
    where: {
      correo: aux.correo,
    },
    include: [{ model: rolModel, attributes: ["id", "nombre"] }],
  });
  return user;
}

const usuarioDao = { createUser, loginUser };

module.exports = usuarioDao;
