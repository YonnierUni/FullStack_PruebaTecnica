import React from "react";
import styles from "./Registro.module.css";
import { useNavigate } from "react-router-dom";
import RegisterUserForm from "../../features/RegisterUserForm/RegisterUserForm";
import Dialog from "../../features/Dialog/Dialog";
import { useState } from "react";

const Registro = () => {
  const [dialogText, setDialogText] = useState("");
  const [confirmText, setConfirmText] = useState("OK");
  const navigate = useNavigate();
  const [conta, setConta] = useState(0);

  return (
    <div className={styles.registro}>
      <h4 className={styles.subTitle}>Crear usuario</h4>
      <RegisterUserForm
        setDialogText={setDialogText}
        setConfirmText={setConfirmText}
      />
      <Dialog
        dialogText={dialogText}
        setDialogText={setDialogText}
        confirmText={confirmText}
        onConfirm={() => {
          if (confirmText == "OK") {
            navigate("/login");
          } else {
            setConta(conta + 1);
          }
        }}
      />
    </div>
  );
};

export default Registro;
