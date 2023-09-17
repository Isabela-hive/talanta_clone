import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Splash from "./splash";
import google from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import arm from "../../assets/images/logo/ministry-white.svg";
// import logo1 from '../../assets/name-white.png'
import logo1 from "../../assets/images/logo/name-white.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const navigationItems = [
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

  return (
    <footer className="footer">
      <div className="upper-section">
        <div className="firstPart">
          <div className="footer-logo">
            <img src={logo1} alt="Company Logo" />
          </div>
          <div className="footer-content">
            {navigationItems.map((item, index) => (
              <div className="footer-nav" key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={`/${link}`}>{link}</Link>
                      {/* <a href="#">{link}</a> */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-icons">
            <img src={google} alt="Icon 1" />
            <img src={appstore} alt="Icon 2" />
          </div>
        </div>
        <div className="secondPart">
          <div className="footer-social-icons">
            <i className="iconss">
              {" "}
              <FaYoutube style={{ color: "" }} />
            </i>
            <i className="iconss">
              <FaFacebook style={{ color: "" }} />
            </i>
            <i className="iconss">
              {" "}
              <FaTwitter style={{ color: "" }} />
            </i>
            <i className="iconss">
              {" "}
              <FaInstagram style={{ color: "" }} />
            </i>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="lower-section">
        <div className="part1">
          <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} Talanta Hela. All right
            reserved
          </div>
          <div className="policy">Policy</div>
          Sitemaps
        </div>

        <div className="part2">
          <div className="splasshy">
            <Splash />
          </div>
          <div className="footer-logoo">
            <img src={arm} alt="Company Logo" />
            {/* <div className='lin'></div>
            <div className='te'>
              <p>
                {' '}
                MINISTRY OF YOUTH AFFAIRS,
                <br /> THE ARTS AND SPORTS
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
