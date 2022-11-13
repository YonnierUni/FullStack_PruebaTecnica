import React from "react";
import styles from "./LoginUserForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { logIn } from "../../services/userServices";
import { baseUrl } from "../../../App";
import { appContext } from "../../../App";
import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const LoginUserForm = ({ setDialogText }) => {
  const [revealPassword, setRevealPassowrd] = useState(false);
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(appContext);
  const [inputs, setInputs] = useState({
    correo: "",
    contrasena: "",
  });

  function iniciarSesion(e) {
    e.preventDefault();
    axios
      .post(`${baseUrl}/usuario/loginUser`, {
        correo: inputs.correo,
        contrasena: inputs.contrasena,
      })
      .then(function (res) {
        return res.data;
      })
      .then(function (token) {
        console.log(token);
        if (token.token != null) {
          logIn(token);
          setCurrentUser(token);
          navigate("/home");
        }
        if (token.ms != null) {
          setDialogText(token.ms);
        }
      })
      .catch((error) => {
        setDialogText("error ", error);
        console.log(error);
      });
  }

  function handleInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  return (
    <form
      onSubmit={(e) => {
        iniciarSesion(e);
      }}
      className={styles.form}
    >
      <div className={styles.form__emailContainer}>
        <span>Direccion correo</span>
        <div>
          <input name="correo" type={"email"} onChange={handleInputs} />
        </div>
      </div>
      <div className={styles.form__passwordContainer}>
        <span>Contraseña</span>
        <div>
          <input
            name="contrasena"
            onChange={handleInputs}
            type={revealPassword ? "text" : "password"}
          />
          <button
            onClick={() => {
              setRevealPassowrd(!revealPassword);
            }}
            type={"button"}
          >
            {revealPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
      <input
        className={styles.form__submit}
        value={"INICIAR SESION"}
        type={"submit"}
      />
      <Link className={styles.form__signup} to={"/register"}>
        ¿No tiene una cuenta? Cree una aqui
      </Link>
    </form>
  );
};

export default LoginUserForm;
