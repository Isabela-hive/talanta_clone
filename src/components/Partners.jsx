import React from "react";
import "./styles/partners.css";
import knls from "../assets/images/partners/knls.png";
import Safaricom from "../assets/images/partners/saf.png";
import ajira from "../assets/images/partners/ajira.png";
import nys from "../assets/images/partners/nys.svg";

const iconsData = [
  {
    id: 1,
    name: "Kenya Library",
    imageSrc: knls,
    link: "link2",
  },
  {
    id: 2,
    name: "Safaricom",
    imageSrc: Safaricom,
    link: "link3",
  },
  {
    id: 3,
    name: "Ajira",
    imageSrc: ajira,
    link: "link4",
  },
  {
    id: 4,
    name: "NYS",
    imageSrc: nys,
    link: "link4",
  },
];

const Partners = () => {
  return (
    <div className="icon-container">
      {iconsData.map(icon => (
        <div className="icon" key={icon.id}>
          <img src={icon.imageSrc} alt={icon.name} />
          <span className="icon-name">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Partners;
