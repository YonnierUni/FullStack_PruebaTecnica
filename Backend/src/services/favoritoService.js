const favoritoDao = require("../repository/favoritoDao");
const tokenKey = "keyPrueba";

const CryptoJS = require("crypto-js");
const secretPass = "KeyPrueba";

async function createFavorito(req, res) {
  try {
    let favorito = {
      idUsuario: req.body.idUsuario,
      idProducto: req.body.idProducto,
    };
    if (favorito.idUsuario != null && favorito.idProducto != null) {
      const newFavorito = await favoritoDao.createFavorito(favorito);
      res.send(
        newFavorito
          ? { ms: "Se agregó el producto a favoritos" }
          : { ms: "No se agregó el producto a favoritos" }
      );
    } else {
      res.send({
        ms: "Falta informacion para agregar el producto a favoritos",
      });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function getFavoritoByUser(req, res) {
  try {
    let aux = {
      idUsuario: req.params.idUsuario,
      idProducto: req.params.idProducto,
    };

    if (aux.idUsuario !== null && aux.idProducto != null) {
      const favorito = await favoritoDao.getFavoritoByUser(aux);
      if (favorito != null) {
        res.send(favorito);
      } else {
        res.send({ ms: "No existe favorito" });
      }
    } else {
      res.send({ ms: "Faltan datos para la consulta" });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function getAllFavoritoByUser(req, res) {
  try {
    let idUsuario = req.params.idUsuario;
    let favoritos = null;
    if (idUsuario != null) {
      favoritos = await favoritoDao.getAllFavoritoByUser(idUsuario);
    }
    res.send(
      favoritos ? favoritos : { ms: "No cuenta con productos favoritos" }
    );
  } catch (error) {
    res.send({ ms: error });
  }
}

async function deleteFavorito(req, res) {
  try {
    let aux = {
      idFavorito: req.params.idFavorito,
      idUsuario: req.params.idUsuario,
    };

    if (aux.idUsuario != null && aux.idFavorito != null) {
      aux = await valoracionDao.deleteValoracion(aux);
      res.send(
        aux ? "Se elimino la valoracion" : "No se elimino la valoracion"
      );
    }
  } catch (error) {
    res.send({ ms: error });
  }
}
async function countAllFavoritoByUser(req, res) {
  try {
    let idUsuario = req.params.idUsuario;
    let favoritos = null;
    if (idUsuario != null) {
      favoritos = await favoritoDao.getAllFavoritoByUser(idUsuario);
    }
    res.send({ cantidadProductos: favoritos.length });
  } catch (error) {
    res.send({ error: error });
  }
}
async function nPaginadoFavoritoByUser(req, res) {
  try {
    let aux = {
      idUsuario: req.body.idUsuario,
      currentPage: req.body.currentPage,
      itemsPerPage: req.body.itemsPerPage,
    };
    if (aux.currentPage != null && aux.itemsPerPage != null) {
      aux = await favoritoDao.nPaginadoFavoritoByUser(aux);
      res.send(aux);
    } else {
      res.send({ ms: "Faltan datos para la consulta" });
    }
  } catch (error) {
    console.log({ error: error });
    res.send({ error: error });
  }
}
const favoritoService = {
  createFavorito,
  getFavoritoByUser,
  getAllFavoritoByUser,
  deleteFavorito,
  countAllFavoritoByUser,
  nPaginadoFavoritoByUser,
};

module.exports = favoritoService;
