import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Styles/Nav.css'

export default function Nav() {
  return (
    <div className="Nav">
      <div className="cont1">
        <a href="#">HOME</a>
      </div>
      <div className="cont2">
        <a href="#">Explore</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}