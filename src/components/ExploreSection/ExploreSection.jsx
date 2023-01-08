import React from "react";
import Card from "../Cards/Card";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import '../ExploreSection/Styles/Style.css'

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
        <Card className="card" img={card1} name={"Zhangye Danxia, China"} />
        <Card className="card" img={card2} name={"Tulip Fields, Netherlands"} />
        <Card className="card" img={card3} name={"Laguna Colorada, Bolivia"} />
      </div>
    </div>
  );
};

export default ExploreSection;
