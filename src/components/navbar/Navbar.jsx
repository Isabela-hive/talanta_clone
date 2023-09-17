import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo1 from "../.././assets/images/logo/ministry.png";
import Logo2 from "../.././assets/images/logo/talanta-logo.png";

import "./navbar.css";

const navData = [
  {
    title: "For Talent",
    links: ["Music", "Football", "Athletics"],
  },
  {
    title: "Events",
    links: ["Sports", "Music", "Drama"],
  },
  {
    title: "Learning Centers",
    links: ["Nairobi", "Mombasa", "Kisumu"],
  },
  {
    title: "Shop",
    links: ["Art", "Music", "Apparel"],
  },
];

const CustomNavbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${isHome ? "nav1" : "nav"}`}
    >
      <Container>
        <Navbar.Brand>
          <div className="logo-container">
            <img src={Logo1} alt="Logo 1" className="logo" />
            <img src={Logo2} alt="Logo 2" className="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="me-auto nav-items">
            {!isHome && (
              <Link to="/" className="link">
                <span>Home</span>
              </Link>
            )}
            {navData.map((item, index) => (
              <NavDropdown
                title={item.title}
                id={`nav-dropdown-${index}`}
                key={index}
              >
                {item.links.map((link, linkIndex) => (
                  <NavDropdown.Item key={linkIndex}>
                    <Link to={`/${link}`} className="a">
                      {link}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
            <Link to="/about" className="link">
              <span>About</span>
            </Link>
            <Link to="/partners" className="link">
              <span>Partners</span>
            </Link>
          </Nav>
          <div className="user">
            <button className="btn">Login</button>
            <button className="btn sign">Register</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
