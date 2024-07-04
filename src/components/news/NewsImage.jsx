import React from "react";
import styles from "./NewsImage.module.css";

function NewsImage(props) {
  const { image } = props;

  return (
    <div className={styles.wrapper}>
      <img className={styles.newsImage} src={image} alt=""/>
    </div>
  );
}

export default NewsImage;