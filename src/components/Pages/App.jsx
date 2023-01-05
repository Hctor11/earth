import Spline from "@splinetool/react-spline";

import "../Pages/App.css";
import Nav from "../Navigation/Nav";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import ExploreSection from "../ExploreSection/ExploreSection";

function App() {

  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/SmPf8eobVcIKS97G/scene.splinecode"
        height={window.innerHeight}
      />
      <Nav className="Nav" />
      <div className="text">
        <h1 className="titleText">Explore the wonders of our home planet with us</h1>
        <p className="descriptionText">
          learn and discover the many amazing features of planet Earth. From the
          highest mountains to the depths of the oceans, our home planet is full
          of wonders waiting to be explored.
        </p>
      </div>
      <Section1/>
      <Section2/>
      <ExploreSection/>
    </div>
  );
}

export default App;
