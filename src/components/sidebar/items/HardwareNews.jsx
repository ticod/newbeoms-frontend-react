import React from "react";

function HardwareNews(props) {
  const { hardwareNewsList } = props;

  return (
    <div>
      {hardwareNewsList.map((hardwareNews, index) => {
        return (
          <div>
            <a href={hardwareNews.link} 
            target="_blank" 
            rel="noreferrer noopener"
            key={index}>
              {index + 1}. {hardwareNews.content}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default HardwareNews;