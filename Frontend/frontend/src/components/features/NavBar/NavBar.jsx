import React from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState, useContext } from "react";
import { appContext } from "../../../App";
import { getUserData, logOut } from "../../services/userServices";
import { baseUrl } from "../../../App";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(appContext);
  const { datosUsuario, setDatosUsuario } = useContext(appContext);

  useEffect(() => {}, [currentUser]);

  const [conta, setConta] = useState(0);

  return (
    <div className={styles.navBar}>
      <ul className={styles.navBar__leftItems}>
        <Link to={"/home"}>Home</Link>
      </ul>
      <ul className={styles.navBar__rightItems}>
        {currentUser ? (
          <></>
        ) : (
          <li>
            <Link to={"/login"}> Login</Link>
          </li>
        )}

        <li className={styles.navBar__rightItems__subMenu}>
          <span>{datosUsuario?.nombres}</span>
          <ul>
            {currentUser ? (
              <li>
                <Link to={"/gestionarProductos"}>Gestionar Productos</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </li>
        <li>
          {currentUser ? (
            <></>
          ) : (
            <li>
              <Link to={"/register"}> Crear usuario</Link>
            </li>
          )}
        </li>
        <li>
          <span
            onClick={() => {
              logOut();
              setCurrentUser(null);
              setDatosUsuario(null);
              navigate("/home");
            }}
          >
            Cerrar sesion
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
