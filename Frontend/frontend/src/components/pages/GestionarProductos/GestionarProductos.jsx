import React from "react";
import styles from "./GestionarProductos.module.css";
import { useNavigate } from "react-router-dom";
import FormProducts from "../../features/FormProducts/FormProducts";
import TablaProducts from "../../features/TableProducts/TableProducts";
import { useState, useContext, useEffect, useRef } from "react";
import Dialog from "../../features/Dialog/Dialog";

const GestionarProductos = () => {
  const [inputs, setInputs] = useState({
    id: 0,
    nombre: "",
    rubro: "",
    marca: "",
    proveedor: "",
    precio: 0,
  });
  const [isEditable, setIsEditable] = useState(false);
  const [conta, setConta] = useState(0);
  const [dialogText, setDialogText] = useState("");
  const [confirmText, setConfirmText] = useState("OK");

  return (
    <div className={styles.gestionarProductos}>
      <Dialog
        dialogText={dialogText}
        setDialogText={setDialogText}
        confirmText={confirmText}
        onConfirm={() => {
          if (confirmText == "OK") {
            setConta(conta + 1);
          }
        }}
      />
      <h4 className={styles.subTitle}>Gestionar productos</h4>
      <FormProducts
        inputs={inputs}
        setInputs={setInputs}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        conta={conta}
        setConta={setConta}
        setDialogText={setDialogText}
      />
      <TablaProducts
        producto={inputs}
        setProducto={setInputs}
        setIsEditable={setIsEditable}
        conta={conta}
        setConta={setConta}
        setDialogText={setDialogText}
      />
    </div>
  );
};

export default GestionarProductos;
