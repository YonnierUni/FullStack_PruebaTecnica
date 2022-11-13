import React from "react";
import styles from "./RegisterUserForm.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../App";
import axios from "axios";

const RegisterUserForm = ({ setDialogText, setConfirmText }) => {
  const [revealPassword1, setRevealPassowrd1] = useState(false);
  const [revealPassword2, setRevealPassowrd2] = useState(false);
  const [revealPassword3, setRevealPassowrd3] = useState(false);
  const [inputs, setInputs] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    contrasena: "",
    Repetircontrasena: "",
  });

  function crearUsuario(e) {
    e.preventDefault();
    if (inputs.contrasena == inputs.Repetircontrasena) {
      axios
        .post(`${baseUrl}/usuario/createUser`, {
          nombres: inputs.nombres,
          apellidos: inputs.apellidos,
          correo: inputs.correo,
          contrasena: inputs.contrasena,
          Repetircontrasena: inputs.Repetircontrasena,
        })
        .then(function (res) {
          return res.data;
        })
        .then(function (text) {
          console.log(text);
          if (text.ms != "Se creó correctamente") {
            setConfirmText("Reintentar");
            setDialogText(text.ms);
          } else {
            setConfirmText("OK");
            setDialogText(text.ms);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setConfirmText("Reintentar");
      setDialogText("No coinciden las contraseñas");

      e.preventDefault();
    }
  }

  function handleInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  return (
    <form
      onSubmit={(e) => {
        crearUsuario(e);
      }}
      className={styles.form}
    >
      <div className={styles.contenedor_left}>
        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Nombres</span>
          <div>
            <input name="nombres" onChange={handleInputs} required />
          </div>
        </div>

        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Apellidos</span>
          <div>
            <input name="apellidos" onChange={handleInputs} required />
          </div>
        </div>

        <div className={styles.form__datoContainer}>
          <span className={styles.p}>Correo electronico</span>
          <div>
            <input
              type={"email"}
              name="correo"
              onChange={handleInputs}
              required
            />
          </div>
        </div>
      </div>
      {/*===================================*/}

      <div className={styles.form__passwordContainer}>
        <span className={styles.p}>Contraseña</span>
        <div>
          <input
            name="contrasena"
            onChange={handleInputs}
            type={revealPassword2 ? "text" : "password"}
            required
          />
          <button
            onClick={() => {
              setRevealPassowrd2(!revealPassword2);
            }}
            type={"button"}
          >
            {revealPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
      <div className={styles.form__passwordContainer}>
        <span className={styles.p}>Repetir contraseña</span>
        <div>
          <input
            name="Repetircontrasena"
            onChange={handleInputs}
            type={revealPassword3 ? "text" : "password"}
            required
          />
          <button
            onClick={() => {
              setRevealPassowrd3(!revealPassword3);
            }}
            type={"button"}
          >
            {revealPassword3 ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
      <input
        className={styles.form__submit}
        value={"CREAR USUARIO"}
        type={"submit"}
      />
    </form>
  );
};

export default RegisterUserForm;
