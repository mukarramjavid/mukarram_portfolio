import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col className="skill">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row className="text-center Contact">
          <Col xs={12} md={4} sm={4}>
            <i class="fa fa-map-marker i-color fa-3x" aria-hidden="true"></i>
            <h4>Lahore, Pakistan</h4>
          </Col>
          <Col xs={12} md={4} sm={4}>
            <i class="fa fa-phone i-color fa-3x" aria-hidden="true"></i>
            <h4>+92 323 8883647</h4>
          </Col>
          <Col xs={12} md={4} sm={4}>
            <i class="fas fa-envelope i-color fa-3x" aria-hidden="true"></i>
            <h4>mukarram_javid@yahoo.com</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
