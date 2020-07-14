import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fas fa-code fa-3x"></i>
            <h3 class="des-color">Web Development</h3>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fas fa-palette fa-3x"></i>
            <h3 class="des-color">Web Design</h3>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fas fa-laptop-code fa-3x"></i>
            <h3 class="des-color">WinForm Development</h3>
          </Col>
        </Row>
        {/* Row 2 */}
        <Row className="skill-row text-center">
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fab fa-wordpress fa-3x"></i>
            <h3 class="des-color">WordPress</h3>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fas fa-database fa-3x"></i>
            <h3 class="des-color">Databases</h3>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <i class="i-color fas fa-headset fa-3x"></i>
            <h3 class="des-color">Support</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
