import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import Paginado from "../../features/Paginado/Paginado";
import  CardProducto from "../../features/CardProducto"

const Home = () => {
  const [cantidadElementos, setCantidadElementos] = useState(0);
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate();

  const cargarCantidadNoticiasPaginado = async () => {
    const respons = await fetch(
      "https://backend.ongpreparacionmetalmecanica.org/archivo/cantidadArchivosIdsByTipo/3",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data");
        console.log(data);
        setCantidadElementos(data.cantidadArchivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarNoticias = async (currentPage, itemsPerPage) => {
    let consul = {
      currentPage,
      itemsPerPage,
    };

    const respons = await fetch(
      "https://backend.ongpreparacionmetalmecanica.org/archivo/nPaginadoArchivoByTipo/3",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consul),
      }
    );
    const Noticiass = await respons.json();
    console.log("noticias cargados");
    console.log(Noticiass);
    setNoticias(Noticiass);
  };

  useEffect(() => {
    cargarCantidadNoticiasPaginado();
    console.log("cargarproductos paginado ");
  }, []);

  useEffect(() => {
    cargarNoticias(currentPage, itemsPerPage);
  }, [cantidadElementos, currentPage]);

  useEffect(() => {
    console.log(cantidadElementos);
  }, [cantidadElementos]);
  return (
    <div className={styles.home}>
      <h4>NOTICIAS</h4>

      <div className={styles.grid}>
        {noticias.map((noti, idx) => {
          return (
            <div className={styles.contenedor_padre}>
              <CardProducto
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
