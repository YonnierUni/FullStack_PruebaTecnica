import React from "react";
import styles from "./Footer.module.css";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <h5>Yonnier Uni</h5>
        <h5>Desarrollador Full Stack</h5>
      </div>
      <div className={styles.footer__redesSociales}>
        <a
          href="https://www.facebook.com/yonnieralberto.univega"
          target="_blank"
        >
          <TiSocialFacebook />
        </a>
        <a href="https://twitter.com/YonnierUV" target="_blank">
          <TiSocialTwitter />
        </a>
        <a href="https://www.instagram.com/yonnier_uni/" target="_blank">
          <TiSocialInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/yonnier-uni-01512a238/"
          target="_blank"
        >
          <TiSocialLinkedin />
        </a>
        <a href="https://github.com/YonnierUni" target="_blank">
          <TiSocialGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
