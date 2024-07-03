import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";


function Logo(props) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoImage} src="logo/logo.png" alt="" />
      <div className={styles.logoTitleBox}>
        <Link className={styles.logoTitle} to="/">NEW BEOMS</Link>
        <div className={styles.logoSubtitle}>간편한 게임 소식지</div>
      </div>
    </div>
  );
}

export default Logo;