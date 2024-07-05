import React from "react";

function GossipLink(props) {
  const { gossipLinkList } = props;

  return (
    <>
    {gossipLinkList.map((gossipLink, index) => {
      return (
        <a href={gossipLink} 
        target="_blank" 
        rel="noreferrer noopener"
        key={index}>
          &nbsp;({index+1})
        </a>
      );
    })}
    </>
  );
}

function Gossip(props) {
  const { gossipList } = props;

  return (
    <>
      {gossipList.map((gossip, index) => {
        return (
          <div>
            <span>{gossip.title}</span>
            <GossipLink gossipLinkList={gossip.links}/>
          </div>
        );
      })}
    </>
  );
}

export default Gossip;