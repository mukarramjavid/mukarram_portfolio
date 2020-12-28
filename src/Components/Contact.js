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
          <Col xs={12} md={3} sm={3}>
            <i class="fa fa-map-marker i-color fa-3x" aria-hidden="true"></i>
            <h4>Lahore, Pakistan</h4>
          </Col>
          <Col xs={12} md={3} sm={3}>
            <i class="fa fa-phone i-color fa-3x" aria-hidden="true"></i>
            <h4>+92 323 8883647</h4>
          </Col>
          <Col xs={12} md={3} sm={3}>
            <i class="fas fa-envelope i-color fa-3x" aria-hidden="true"></i>
            <h4>mukarramjavid@gmail.com</h4>
          </Col>
              <Col xs={12} md={3} sm={3}>
            <div class="fb-page" data-href="https://www.facebook.com/UniversityWaliAwam" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/UniversityWaliAwam" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/UniversityWaliAwam">University Wali Awam</a></blockquote></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
