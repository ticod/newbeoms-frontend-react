import React from "react";
import NewsImage from "./NewsImage";
import styles from "./News.module.css";

function News(props) {
  const { news } = props;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{news.title}</div>
      <div className={styles.subtitle}>{news.subtitle}</div>
      {news.imagePath ? <NewsImage image={news.imagePath} /> : null}
      <div className={styles.content}>
        {news.content.split("<br>").map((content) => {
          return (
            <>
              {content}
              <br/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default News;