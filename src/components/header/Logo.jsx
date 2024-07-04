import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImage from "../../assets/logo.png";


function Logo(props) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoImage} src={logoImage} alt="" />
      <div className={styles.logoTitleBox}>
        <Link className={styles.logoTitle} to="/">NEW BEOMS</Link>
        <div className={styles.logoSubtitle}>간편한 게임 소식지</div>
      </div>
    </div>
  );
}

export default Logo;