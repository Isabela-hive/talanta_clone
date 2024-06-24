import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MissionVission = () => {
  const missionSection = [
    {
      title: "Objective",
      icon: "fas fa-handshake",
      desc: "Identifying, nurturing and monetizing talents",
    },
    {
      title: "Mission",
      icon: "fas fa-compass",
      desc: "Bridging the gap between local talents and the realization of their dreams",
    },
    {
      title: "Vision",
      icon: "fas fa-lightbulb",
      desc: "Opening up the sports and creatives industries in Kenya towards greater heights",
    },
  ];

  return (
    <Fragment>
      <div className="bg-white">
        <Row className="justify-content-center mx-0 bg-light py-3">
          {missionSection.map((item, i) => (
            <Col key={i} md="4" style={{ maxWidth: 380 }} className="d-flex">
              <Card className="w-100 rounded-3 border border-secondary border-opacity-25 mb-md-0">
                <Card.Body>
                  <i className={`${item.icon} fs-1`} />
                  <h2>{item.title}</h2>

                  <p className="fs-4 mb-0">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default MissionVission;
