import React from "react";
import Top from "../../components/Top";
import Goals from "../../components/Goals";
// import Steps from "../../components/Steps";
import SuccessStories from "../../components/SucessStories";
import TrainingCenters from "../../components/TrainingCenters";
import Partners from "../../components/Partners";
import Ffooter from "../../components/footer";
import Sellers from "../../components/Sellers";
import { Link } from "react-router-dom";
import stepsImg from "../../assets/images/levels.png";
// import MissionVission from "./Mission";
// import Part from "./Part";
// import Stakeholders from "./Stakeholders";

const Landing = () => {
  return (
    <div>
      <Top />
      <Goals />
      {/* <MissionVission /> */}

      <div className="exhibits">
        <div className="exhibt-title">
          <div className="exhibit-top">
            <h1>Top Sellers</h1>
            <Link to="/#">View All</Link>
          </div>

          <div className="exhibits-links">
            <Link to="/media">Publishing & Media</Link>
            <Link to="/design">Design</Link>
            <Link to="#">Creative</Link>
            <Link to="#">Cultural Arts</Link>
            <Link to="/visualarts">Visual Arts</Link>
          </div>
        </div>
        <Sellers />
      </div>
      <div className="bg-white pt-4 pb-3">
        <h1 className="fw-bolder text-center text-dark mb-4 display-5">
          Scale your <span className="text-danger">Talent</span> to the next
          level.
        </h1>

        <img src={stepsImg} alt="" className="w-100" />
      </div>
      {/* <div className="ste">
        <h1>
          Scale your <span>Talent </span>to the <br /> next Level
        </h1>
       
        <Steps />
      </div> */}

      <div className="stories">
        <h1>Success Stories</h1>
        <SuccessStories />
        {/* <Stakeholders /> */}
      </div>
      <div className="training-card">
        <h1>Our Training Centers</h1>
        <TrainingCenters />
      </div>
      <div className="icon-rows">
        <h2>Our Partners</h2>
        <Partners />
        {/* <Part /> */}
      </div>
      <Ffooter />
    </div>
  );
};

export default Landing;
