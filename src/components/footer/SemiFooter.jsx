import React from "react";
import "./semi.css";
import { BsQrCode } from "react-icons/bs";
import google from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import phone from "../../assets/images/iPhone 14 Mockup, Clay 1.png";

const SemiFooter = () => {
  return (
    <div className="semi">
      <div className="one">
        <h2>
          Upload your videos. Anywhere,
          <br /> anytime.
        </h2>
        <div className="scan">
          <img src="" alt="" />
          <BsQrCode style={{ fontSize: "4rem" }} />
        </div>
        <div className="play">
          <img src={google} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
      <div className="phone">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default SemiFooter;
