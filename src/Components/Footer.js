import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <h6>Copyrights Reserved | Mukarram</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <a className="" href="https://twitter.com/hafizj1125/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn " href="https://facebook.com/hafizj1125/">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="btn" href="https://github.com/mukarramjavid/">
              <i class="fab fa-github"></i>
            </a>
            <a className="btn" href="https://www.linkedin.com/in/hafizj1125/">
              <i class="fab fa-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
