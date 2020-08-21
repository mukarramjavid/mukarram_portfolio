import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import skillData from "../SkillData";
export default function Skills() {
  return (
    <>
      <Container>
        <Row>
          <Col className="skill">
            <h1>Skills</h1>
          </Col>
        </Row>
        {/* Row 1 */}
        <Row className="skill-row text-center">
          {skillData.map((val) => {
            return (
              <Col md={6} sm={6} xs={12} key={val.id} className="margin_bottom">
                <h3>{val.skillName}</h3>
                <ProgressBar
                  animated={val.animated}
                  variant={val.skillVariant}
                  now={val.skillNow}
                  label={val.skillLabel}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
