import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceData from "../ServiceData";
export default function Services() {
  return (
    <>
      <Container>
        <Row>
          <Col className="skill">
            <h1>Services</h1>
          </Col>
        </Row>
        {/* Row 1 */}
        <Row className="skill-row text-center">
          {ServiceData.map((val) => {
            return (
              <Col md={4} sm={4} xs={12} key={val.id} className="margin_bottom">
                <i className={val.iconName}></i>
                <h3 className="des-color">{val.skillName}</h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
