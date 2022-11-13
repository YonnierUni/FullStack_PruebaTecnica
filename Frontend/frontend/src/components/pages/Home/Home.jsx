import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import Paginado from "../../features/Paginado/Paginado";
import CardProducto from "../../features/CardProducto/CardProducto";
import axios from "axios";
import { baseUrl } from "../../../App";

const Home = ({}) => {
  const [cantidadElementos, setCantidadElementos] = useState(0);
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate();

  const cargarCantidadProductosPaginado = async () => {
    const respons = await axios
      .get(`${baseUrl}/producto/countProductos`)
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
      .post(`${baseUrl}/producto/nPaginadoProductos`, {
        consul,
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log("data");
        console.log(data);
        setProductos(data);
      })
      .catch((error) => {
        console.log(error);
      });
    const Productoss = await respons.json();
    console.log("productos cargados");
    console.log(Productoss);
    setProductos(Productoss);
  };

  useEffect(() => {
    cargarCantidadProductosPaginado();
    console.log("cargarproductos paginado ");
  }, []);

  useEffect(() => {
    cargarProductos(currentPage, itemsPerPage);
  }, [cantidadElementos, currentPage]);

  useEffect(() => {
    console.log(cantidadElementos);
  }, [cantidadElementos]);
  return (
    <div className={styles.home}>
      <h4>Home</h4>

      <div className={styles.grid}>
        {productos.map((product, idx) => {
          return (
            <div className={styles.contenedor_padre}>
              <CardProducto
                id={product.id}
                nombre={product.nombre}
                rubro={product.rubro}
                marca={product.marca}
                proveedor={product.roveedor}
                precio={product.precio}
              ></CardProducto>
            </div>
          );
        })}
      </div>
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
export default Home;
