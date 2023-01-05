import React from "react";
import Card from "../Cards/Card";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";

const ExploreSection = () => {
  return (
    <div className="ExploreSection">
      <span
        style={{
          color: "white",
          display: "grid",
          justifyContent: "center",
        }}
      >
        Explore
      </span>
      <div className="cards-container">
        <Card img={card1} name={"hola los tilines"} />
        <Card img={card2} name={"que so que so"} />
        <Card img={card3} name={"chiquitin"} />
      </div>
    </div>
  );
};

export default ExploreSection;
