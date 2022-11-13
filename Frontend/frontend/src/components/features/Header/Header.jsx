import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  );
};

export default Header;
