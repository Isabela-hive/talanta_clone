import React from "react";
import { useState, useEffect } from "react";
import "./styles/home.css";
import bg1 from "../assets/images/backgrounds/Ababu.png";
import bg2 from "../assets/images/backgrounds/faith.png";
import bgmain from "../assets/images/backgrounds/main-bg.png";
import V_3 from "./SVGs/V_3";
import V_4 from "./SVGs/V_4";
// import V_1 from "./SVGs/V_1";
import google from "../assets/images/googleplay.png";
import appstore from "../assets/images/appstore.png";
const Top = () => {
  const [activeImage, setActiveImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prevActiveImage => (prevActiveImage === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const backgroundImage = activeImage === 1 ? bg1 : bg2;
  return (
    <div className="home">
      <div
        className="bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* <img src={backgroundImage} className="maiin" alt="" /> */}
        {/* <div className="b"></div>
        <img src={bgmain} alt="" /> */}
        <div className="b"></div>
        <div className="vectors">
          <img src={bgmain} alt="" />
          <V_3 />

          {/* <V_1 /> */}
          <V_4 />
        </div>
        <div className="details">
          <h4>Talanta Hela</h4>
          <h1>
            Home of <span>sports</span> and <span>Creatives</span>
          </h1>
          <p>
            Talanta Hela is a government initiative in Kenya that empowers and
            connects creatives. It provides resources, training, and
            opportunities to help them succeed.
          </p>
          <div className="icons">
            <img src={appstore} alt="App Store" />
            <img src={google} alt="Google Play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
