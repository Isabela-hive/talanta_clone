import React from "react";
import "./styles/exhibits.css";
import artPotraint from "../assets/images/exhibits/exhibit1.png";
import potrait2 from "../assets/images/exhibits/exhibit3.png";
import giraffePotrait from "../assets/images/exhibits/exhibit2.png";
import { Link } from "react-router-dom";
// import academy2 from "../assets/images/academies/academy2.png";
function Exhibits({ name, description, type, price, image, children }) {
  return (
    <div className="carrd">
      <img src={image} alt={name} />
      <div className="carrd-content">
        <Link to={type}> {type}</Link>
        <p>{description}</p>

        <p>{price}</p>
        <button> + Add to cart</button>
      </div>
    </div>
  );
}

const products = [
  {
    type: "Media",
    description: " Kenya Maasai Art",
    price: "Kes. 4,038.03",
    image: artPotraint,
  },
  {
    type: "Design",
    description: " Kenya Maasai Art",
    price: "Kes. 4,038.03",
    image: potrait2,
  },
  {
    type: "Visual Arts",
    description: "Giraffe Figure,",
    price: "Kes. 4,038.03",
    image: giraffePotrait,
  },
  {
    type: "Media",
    description: " Kenya Maasai Art",
    price: "Kes. 4,038.03",
    image: artPotraint,
  },
];

function Sellers() {
  return (
    <div className="carrd-row">
      {products.map((product, index) => (
        <Exhibits key={index} {...product} />
      ))}
    </div>
  );
}

export default Sellers;
