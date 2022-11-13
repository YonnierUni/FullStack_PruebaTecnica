import React from "react";
import styles from "./FormProducts.module.css";
import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl, appContext } from "../../../App";
import Dialog from "../../features/Dialog/Dialog";
import axios from "axios";

const FormProducts = ({
  isEditable,
  setIsEditable,
  inputs,
  setInputs,
  conta,
  setConta,
  setDialogText,
}) => {
  const { currentUser } = useContext(appContext);
  const [confirmText, setConfirmText] = useState("OK");

  function crearProducto(e) {
    axios
      .post(`${baseUrl}/producto/createProducto`, {
        inputs,
      })
      .then(function (res) {
        if (res.status == 403) throw new Error("No authorization");
        return res.data;
      })
      .then(function (text) {
        setDialogText(text.ms);
        limpiarProducto();
        setConta(conta + 1);
      })
      .catch((error) => {
        setDialogText("you dont have authorization");
        console.log(error);
      });
  }

  function modificarProducto() {
    axios
      .post(`${baseUrl}/producto/updateProducto`, {
        inputs,
      })
      .then(function (res) {
        return res.data;
      })
      .then(function (text) {
        setDialogText(text?.ms);
        console.log(text.ms);
        setIsEditable(false);
        limpiarProducto();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function validarDatos(inputs) {
 
  }
  const limpiarProducto = async () => {
    setInputs({
      ...inputs,
      nombre: "",
      rubro: "",
      marca: "",
      proveedor: "",
      precio: 0,
    });
    setConta(conta + 1);
  };

  function handleInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  return (
    <div className={styles.form}>
      <div className={styles.contenedor_left}>
        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Nombre</span>
          <div>
            <input
              name="nombre"
              onChange={handleInputs}
              value={inputs.nombre}
              required
            />
          </div>
        </div>

        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Rubro</span>
          <div>
            <input
              name="rubro"
              onChange={handleInputs}
              value={inputs.rubro}
              required
            />
          </div>
        </div>

        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Marca</span>
          <div>
            <input
              name="marca"
              onChange={handleInputs}
              value={inputs.marca}
              required
            />
          </div>
        </div>
      </div>
      {/*===================================*/}
      <div className={styles.form__datoContainer}>
        <span className={styles.p}>Proveedor</span>
        <div>
          <input
            name="proveedor"
            onChange={handleInputs}
            value={inputs.proveedor}
            required
          />
        </div>
      </div>
      <div className={styles.form__datoContainer}>
        <span className={styles.p}>Precio </span>
        <div>
          <input
            name="precio"
            onChange={handleInputs}
            type={"number"}
            value={inputs.precio}
            required
          />
        </div>
      </div>
      <div className={styles.crearProducto__inputs__container__buttons}>
        {isEditable ? (
          <input
            className={styles.form__submit}
            type={"button"}
            onClick={() => {
              modificarProducto();
              setIsEditable(false);
            }}
            value={"Modificar"}
          />
        ) : (
          <input
            className={styles.form__submit}
            type={"button"}
            value={"Agregar"}
            onClick={(e) => {
              crearProducto(e);
            }}
          />
        )}
        <input
          className={styles.form__submit}
          type={"button"}
          value={"Cancelar"}
          onClick={() => {
            limpiarProducto();
            setIsEditable(false);
          }}
        />
      </div>
    </div>
  );
};

export default FormProducts;
