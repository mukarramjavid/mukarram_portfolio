import React from "react";
import { Container, Row, Col, ProgressBar,Button } from "react-bootstrap";
export default function Skills() {
  return (
    <>
      <Container>
        <Row>
          <Col className="skill" md={12} xs={12}>
            <h1>Skills <Button href="https://mukarramblog.netlify.app/" target="_blank" variant="outline-warning" className="float-right">See my mini Projects</Button></h1>
          </Col>
        </Row>
    
        {/* Row 1 */}
        <Row className="skill-row text-center">
    
          <Col md={6} sm={6} xs={12}>
            <h3>HTML/CSS</h3>
            <ProgressBar variant="success" now={100} label={`100%`} />
          </Col>
          <Col md={6} sm={6} xs={12}>
            <h3>ASP.NET MVC 5</h3>
            <ProgressBar animated now={80} label={`80%`} />
          </Col>
        </Row>
        {/* Row 2 */}
        <Row className="skill-row text-center">
          <Col md={6} sm={6} xs={12}>
            <h3>jQuery/JS</h3>
            <ProgressBar variant="warning" animated now={75} label={`75%`} />
          </Col>
          <Col md={6} sm={6} xs={12}>
            <h3>MSSQL Server</h3>
            <ProgressBar variant="danger" now={65} label={`65%`} />
          </Col>
        </Row>
        {/* Row 3 */}
        <Row className="skill-row text-center">
          <Col md={6} sm={6} xs={12}>
            <h3>Web API</h3>
            <ProgressBar variant="info" animated now={10} label={`10%`} />
          </Col>
          <Col md={6} sm={6} xs={12}>
            <h3>React.js</h3>
            <ProgressBar variant="warning" now={15} label={`15%`} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
