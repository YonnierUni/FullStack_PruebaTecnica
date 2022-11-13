import React from "react";
import styles from "./TableProducts.module.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import Paginado from "../Paginado/Paginado";
import { baseUrl, appContext } from "../../../App";
import axios from "axios";

const TableProducts = ({
  producto,
  setProducto,
  setIsEditable,
  conta,
  setConta,
  setDialogText,
}) => {
  const [seleccion, setSeleccion] = useState();
  const [selecIni, setSelecIni] = useState("value2");
  const [productosPaginado, setProductosPaginado] = useState([{}]);
  const [productos, setProductos] = useState([]);

  const [productosPagina, setProductosPagina] = useState([]);
  const [cantidadElementos, setCantidadElementos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const { currentUser } = useContext(appContext);

  const cargarCantidadProductosPaginado = async () => {
    const respons = await axios
      .get(`${baseUrl}/producto/countProductos/`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log("data");
        console.log(data);
        setCantidadElementos(data.cantidadProductos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarProductos = async (currentPage, itemsPerPage) => {
    let consul = {
      currentPage,
      itemsPerPage,
    };

    const respons = await axios
      .post(`${baseUrl}/producto/nPaginadoProductos/`, {
        consul,
      })
      .then(function (res) {
        return res.data;
      })
      .then(function (text) {
        console.log("Productoss");
        console.log(text);
        setProductos(text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarProducto = async (idProducto) => {
    console.log(idProducto);
    const respons = await axios
      .get(`${baseUrl}/producto/getProducto/${idProducto}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log("datacargar");
        console.log(data);
        setProducto({
          ...producto,
          id: data.id,
          nombre: data.nombre,
          rubro: data.rubro,
          marca: data.marca,
          proveedor: data.proveedor,
          precio: data.precio,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const eliminarProducto = async (idProducto) => {
    axios
      .get(`${baseUrl}/producto/deleteProducto/${idProducto}`)
      .then(function (res) {
        return res.data;
      })
      .then(function (text) {
        setDialogText(text + " el producto con ID: " + idProducto);
        setConta(conta + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cargarCantidadProductosPaginado();
    console.log("cargarproductos paginado " + conta);
  }, [conta]);

  useEffect(() => {
    cargarProductos(currentPage, itemsPerPage);
    console.log(currentPage + " - " + itemsPerPage);
  }, [currentPage, conta]);

  useEffect(() => {
    console.log(cantidadElementos);
  }, [cantidadElementos]);

  /*
  useEffect(() => {
    cargarCantidadProductosPaginado();
  }, []);
  
  
  useEffect(() => {
      
    console.log("cargar productos en useeffect");
  
    cargarProductos(currentPage, itemsPerPage);
  }, [currentPage]);
  */
  return (
    <div className={styles.tablaUsuariosRegistrados}>
      <h2>Productos registrados </h2>
      <table className={styles.tablaUsuarios}>
        <tr>
          <th className={styles.first}>Id</th>
          <th>Nombre del producto</th>
          <th>Fecha de registro</th>
          <th className={styles.latest}>Precio</th>
        </tr>
        {Array.isArray(productos) &&
          productos.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td className={styles.a}>{product.nombre}</td>
              <td>{product.createdAt} </td>
              <td>{product.precio}</td>
              <td className={styles.td__button}>
                <button
                  className={styles.tablaUsuarios__edit__btn}
                  onClick={() => {
                    cargarProducto(product.id);
                    setIsEditable(true);
                  }}
                >
                  Editar
                </button>
              </td>
              <td className={styles.td__button}>
                <button
                  name={product.id}
                  onClick={() => {
                    eliminarProducto(product.id);
                  }}
                  className={styles.tablaUsuarios__delete__btn}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </table>
      <div className={styles.home__paginate}>
        {cantidadElementos > 0 && (
          <Paginado
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            cantidadElementos={cantidadElementos}
            setCantidadElementos={setCantidadElementos}
          />
        )}
      </div>
    </div>
  );
};

export default TableProducts;
