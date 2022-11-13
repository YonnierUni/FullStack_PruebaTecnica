const { Op } = require("sequelize");
const { productoModel } = require("../models/productoModel");
const { favoritoModel } = require("../models/favoritoModel");

async function createProducto(producto) {
  const newProducto = await productoModel.create(producto);
  return newProducto;
}

async function getProducto(idProducto) {
  const producto = await productoModel.findOne({
    attributes: ["id", "nombre", "rubro", "marca", "proveedor", "precio"],
    where: { id: idProducto },
  });
  return producto;
}

async function getAllProductos() {
  const productos = await productoModel.findAll();
  return productos;
}

async function updateProducto(producto) {
  console.log("producto")
  console.log(producto)
  let newProducto = await productoModel.update(
    {
      nombre: producto.nombre,
      rubro: producto.rubro,
      marca: producto.marca,
      proveedor: producto.proveedor,
      precio: producto.precio,
    },
    { where: { id: producto.id } }
  );
  return newProducto;
}

async function deleteProducto(idProducto) {
  const producto = await productoModel.destroy({ where: { id: idProducto } });
  return producto;
}
async function nPaginadoProductos(datos) {
  let prods = await productoModel.findAll({
    limit: datos.itemsPerPage,
    offset: datos.itemsPerPage * (datos.currentPage - 1),
    include: {
      model: favoritoModel,
      attributes: ["id", "createdAt"],
    },
    order: [["createdAt", "DESC"]],
  });
  return prods;
}
const productoDao = {
  createProducto,
  getProducto,
  getAllProductos,
  updateProducto,
  deleteProducto,
  nPaginadoProductos,
};

module.exports = productoDao;
