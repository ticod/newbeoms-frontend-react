import React from "react";

function WorkCited(props) {
  const { workCitedList } = props;

  return (
    <div>
      {workCitedList.map((workCited, index) => {
        return (
          <div>
            <a href={workCited.link} 
            target="_blank" 
            rel="noreferrer noopener"
            key={index}>
              {index + 1}. {workCited.link}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default WorkCited;