import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import LoginUserForm from "../../features/LoginUserForm/LoginUserForm";
import Dialog from "../../features/Dialog/Dialog";
import { useState } from "react";

const Login = () => {
  const [dialogText, setDialogText] = useState("");
  const [confirmText, setConfirmText] = useState("OK");
  return (
    <div className={styles.Login}>
      <h4 className={styles.subTitle}>Iniciar sesion con su cuenta</h4>
      <LoginUserForm setDialogText={setDialogText} />{" "}
      <Dialog
        dialogText={dialogText}
        setDialogText={setDialogText}
        cancelText={"Ok"}
      />
    </div>
  );
};

export default Login;
