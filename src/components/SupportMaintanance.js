import React from "react";

const SupportMaintanance = ({ content }) => {
  return (
    <div className="content">
      <h2>{content.title}</h2>
      {content.content.map((item, index) => {
        return <p key={index}>{item.text}</p>;
      })}
    </div>
  );
};

export default SupportMaintanance;
