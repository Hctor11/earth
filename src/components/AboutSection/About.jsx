import React from "react";
import "../AboutSection/Styles/Styles.css";
import img from "../img/finalimg.png";

const About = () => {
  return (
    <div className="AboutContainer" id="About">
      <div className="textAbout">
        <h2>About</h2>
        <p>
          Our website was created with the goal of providing a comprehensive and
          accessible source of information about planet Earth. We believe that
          understanding and appreciating the natural world is essential for the
          well-being of all living beings, and that knowledge is the first step
          towards creating a more sustainable and harmonious relationship with
          our planet. We are motivated by a deep love and respect for Earth, and
          we hope that our website will inspire others to join us in this
          mission.
        </p>
      </div>
      <div className="image">
        <img src={img} alt="about image" />
      </div>
    </div>
  );
};

export default About;
