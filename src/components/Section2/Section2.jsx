import React from "react";
import "../Section2/Styles/Styles.css";
import img2 from "../img/img2.png";

const Section2 = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <p className="information">
          We invite you to join us on this journey of discovery, and to share
          your own insights and experiences with us. Whether you are a
          scientist, a nature enthusiast, or just someone who loves learning
          about the world around us, we hope you will find our website a
          valuable source of knowledge and inspiration. So come explore with us,
          and discover all that planet Earth has to offer!
        </p>
        <img src={img2} alt="forest image" width="1200px"/>
      </div>
    </div>
  );
};

export default Section2;
