import React from "react";

const Cards = ({ img, name }) => {
  return (
    <div
      className="Card"
      style={{
        height: 790,
        width: 400,
        backgroundImage: "url(" + img + ")",
        cursor: "pointer"
      }}
    >
      <h2 style={{
        color: "white",
        display: "inline-block",
        marginLeft: "16px",
        fontSize: "32px",
        lineHeight: "32px"
      }}
      >{name}</h2>
    </div>
  );
};

export default Cards;
