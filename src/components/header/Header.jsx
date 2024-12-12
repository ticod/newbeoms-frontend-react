import React from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

function Header(props) {
  const { align } = props;

  switch (align) {
    case 'left':
      return (
        <div className={`${styles.wrapper} ${styles.left}`}>
          <Logo/>
        </div>
      );
    case 'right':
      return (
        <div className={`${styles.wrapper} ${styles.right}`}>
          <Logo/>
        </div>
      );
    case 'center':
    default:
      return (
        <div className={`${styles.wrapper} ${styles.center}`}>
          <Logo/>
        </div>
      );
  }
}

export default Header;