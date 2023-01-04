import React from "react";
import img1 from "../img/img1.png";
import './Styles/Section1.css'

const Section1 = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={img1} alt="clouds image" className="img" />
        <p className="information">
          Our website is a hub of information and resources about Earth's
          diverse environments, ecosystems, and habitats. From the icy poles
          to the tropical rainforests, we delve into the unique characteristics
          and challenges of each region. You can find detailed profiles of
          different animal and plant species, as well as interactive maps and
          timelines that showcase the changing face of our planet over time.
        </p>
      </div>
    </div>
  );
};

export default Section1;
