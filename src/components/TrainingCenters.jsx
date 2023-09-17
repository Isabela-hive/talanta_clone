import React from "react";
import "./styles/trainingcenters.css";
import academy1 from "../assets/images/academies/academy1.png";
// import academy2 from "../assets/images/academies/academy2.png";
function AcademyCard({ name, description, link, image }) {
  return (
    <div className="card-academy">
      <img src={image} alt={name} />
      <div className="-content">
        {/* <h3>{name}</h3> */}
        {/* <p>{description}</p> */}
        {/* <a className='tranbtn ' href={link}>
          Go to
        </a> */}
      </div>
    </div>
  );
}

const academies = [
  {
    name: "Academy 1",
    description: "Description of Academy 1",
    link: "#",
    image: academy1,
  },
  {
    name: "Academy 2",
    description: "Description of Academy 2",
    link: "#",
    image: academy1,
  },
  {
    name: "Academy 3",
    description: "Description of Academy 3",
    link: "#",
    image: academy1,
  },
];

function TrainingCenters() {
  return (
    <div className="card-roww">
      {academies.map((academy, index) => (
        <AcademyCard key={index} {...academy} />
      ))}
    </div>
  );
}

export default TrainingCenters;
