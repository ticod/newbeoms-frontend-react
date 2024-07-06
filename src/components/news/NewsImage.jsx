import { useLocation } from "react-router-dom";
import styles from "./NewsImage.module.css";

function NewsImage(props) {
  const { pathname } = useLocation();
  const { image } = props;

  const imagePath = pathname.startsWith('/publication') 
    ? `${process.env.PUBLIC_URL}${image}` 
    : `${process.env.PUBLIC_URL}publication/${image}`;

  return (
    <div className={styles.wrapper}>
      <img className={styles.newsImage} src={imagePath} alt=""/>
    </div>
  );
}

export default NewsImage;