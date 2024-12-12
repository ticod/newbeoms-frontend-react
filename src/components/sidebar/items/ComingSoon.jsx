import React from "react";

function ComingSoonContent(props) {
  const { comingSoonContentList } = props;

  return (
    <ul>
      {comingSoonContentList.map((content, index) => {
        return <li key={index}>{content}</li>;
      })}
    </ul>
  );
}

function ComingSoon(props) {
  const { comingSoonList } = props;

  return (
    <div>
      {comingSoonList.map((comingSoon, index) => {
        return (
          <>
            <div key={index}>{comingSoon.date}</div>
            <ComingSoonContent key={index}
              comingSoonContentList={comingSoon.contents} 
            />
            <br/>
          </>
        );
      })}
    </div>
  );
}

export default ComingSoon;