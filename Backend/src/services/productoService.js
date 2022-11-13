const productoDao = require("../repository/productoDao");
const tokenKey = "keyPrueba";

const CryptoJS = require("crypto-js");
const secretPass = "KeyPrueba";

async function createProducto(req, res) {
  try {
    let producto = {
      nombre: req.body.inputs.nombre,
      rubro: req.body.inputs.rubro,
      marca: req.body.inputs.marca,
      proveedor: req.body.inputs.proveedor,
      precio: req.body.inputs.precio,
    };
    if (
      producto.nombre != null &&
      producto.rubro != null &&
      producto.marca != null &&
      producto.proveedor != null &&
      producto.precio != null &&
      producto.nombre != "" &&
      producto.rubro != "" &&
      producto.marca != "" &&
      producto.proveedor != "" &&
      producto.precio != ""
    ) {
      const newProducto = await productoDao.createProducto(producto);
      res.send(
        newProducto
          ? { ms: "Se creó el producto correctamente" }
          : { ms: "No se creó el producto" }
      );
    } else {
      res.send({ ms: "Falta informacion para el registro" });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function getProducto(req, res) {
  try {
    let idProducto = req.params.idProducto;
    let producto = null;
    if (idProducto !== null) {
      producto = await productoDao.getProducto(idProducto);
      if (producto != null) {
        res.send(producto);
      } else {
        res.send({ ms: "No existe producto" });
      }
    } else {
      res.send({ ms: "Faltan datos para la consulta" });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function getAllProductos(req, res) {
  try {
    const aux = await productoDao.getAllProductos();
    res.send(aux);
  } catch (error) {
    res.send({ ms: error });
  }
}

async function updateProducto(req, res) {
  try {
    console.log("req.body");
    console.log(req.body.inputs.id);
    let producto = {
      id: req.body.inputs.id,
      nombre: req.body.inputs.nombre,
      rubro: req.body.inputs.rubro,
      marca: req.body.inputs.marca,
      proveedor: req.body.inputs.proveedor,
      precio: req.body.inputs.precio,
    };
    console.log("producto");
    console.log(producto);
    if (
      producto.id != null &&
      producto.nombre != null &&
      producto.rubro != null &&
      producto.marca != null &&
      producto.proveedor != null &&
      producto.precio != null
    ) {
      let newProducto = await productoDao.updateProducto(producto);
      res.send(
        newProducto
          ? { ms: "Se actualizó el producto correctamente" }
          : { ms: "No se actualizó el producto" }
      );
    } else {
      res.send({ ms: "Falta informacion para actualizar" });
    }
  } catch (error) {
    res.send({ ms: error });
  }
}

async function deleteProducto(req, res) {
  try {
    let idProducto = req.params.idProducto;
    console.log("idProducto");
    console.log(idProducto);

    let producto = null;

    if (idProducto != null) {
      producto = await productoDao.deleteProducto(idProducto);
      res.send(
        producto ? "Se elimino el producto" : "No se elimino el producto"
      );
    }
  } catch (error) {
    res.send({ ms: error });
  }
}
async function countProductos(req, res) {
  try {
    aux = await productoDao.getAllProductos();
    res.send({ cantidadProductos: aux.length });
  } catch (error) {
    res.send({ error: error });
  }
}
async function nPaginadoProductos(req, res) {
  try {
    let aux = {
      currentPage: req.body.currentPage,
      itemsPerPage: req.body.itemsPerPage,
    };
    if (aux.currentPage != null && aux.itemsPerPage != null) {
      aux = await productoDao.nPaginadoProductos(aux);
      res.send(aux);
    } else {
      res.send({ ms: "Faltan datos para la consulta" });
    }
  } catch (error) {
    console.log({ error: error });
    res.send({ error: error });
  }
}

const productoService = {
  createProducto,
  getProducto,
  getAllProductos,
  updateProducto,
  deleteProducto,
  countProductos,
  nPaginadoProductos,
};

module.exports = productoService;
