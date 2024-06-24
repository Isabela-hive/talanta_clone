import React, { Fragment } from "react";
import { team } from "../../assets/images/team";
import { Link } from "react-router-dom";
import "../../assets/css/team.css";

const Stakeholders = () => {
  const teamlist = [
    {
      name: "Hon. Ababu Namwambah, EGH",
      title: "Cabinet Secretaty, Ministry of Youth Affairs and Sports",
      photo: team[0]?.img,
      //   link: "/leadership/cabinet-secretary",
    },
    {
      name: "Eng. Peter Tum, OGW",
      title: "Principal Secretaty, State Department of Sports",
      photo: team[1]?.img,
      // link: '/leadership/ps-sports'
    },
    {
      name: "Ismail Maalim",
      title: "Principal Secretary, State Department of Youth Affairs",
      photo: team[2]?.img,
      // link: '/leadership/ps-youth'
    },
    {
      name: "Dr. Doreen Odhiambo",
      title: "CEO, Kenya Academy of Sports",
      photo: team[3]?.img,
      //   link: "/leadership/ceo-kas",
    },
  ];

  return (
    <Fragment>
      <div id="leadership" className="py-3 bg-light">
        <div className="container-md">
          <h1 className="fw-bolder text-center text-dark mb-4 display-5">
            Leadership
          </h1>

          <div className="team-list">
            {teamlist.map(item => (
              <div key={item.title} className="member">
                <div className="photo-section">
                  <div className="photo-container">
                    <img src={item.photo} />
                  </div>
                </div>

                <div className="name-role">
                  <p className="name">{item.name}</p>
                  <p className="role">{item.title}</p>

                  {item?.link && (
                    <Link
                      to={item.link}
                      className="text-danger text-decoration-underline text-center fs-5"
                    >
                      More {">"}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Stakeholders;
