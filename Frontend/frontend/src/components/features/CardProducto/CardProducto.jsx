import React from "react";
import styles from "./CardProducto.module.css";

const CardProducto = ({ id, nombre, rubro, marca, proveedor, precio }) => {
  return (
    <div className={styles.contenedor_hijo}>
      <div className={styles.contenedor_hijo_interno}>
        <p className={styles.Title_2}>{nombre}</p>
        <p className={styles.subTitle_1}>{rubro}</p>
        <p className={styles.subTitle_2}>{marca}</p>
        <p className={styles.subTitle_3}>{proveedor}</p>
        <p className={styles.p}>{precio}</p>
        <div>
          <img src={""} />
        </div>
      </div>
      {/** <button
        className={styles.button}
        onClick={() => {
          navigate("../AprendeConNosotrosApp/" + id);
        }}
      >
        Aplicar
      </button> */}
    </div>
  );
};
export default CardProducto;
