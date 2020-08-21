import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} xs={12} className="text-center d-none d-sm-block">
            <Image src="/images/profile-pic.jpg" thumbnail className="homeDp" />
          </Col>
          <Card style={{ border: "none" }} className="">
            <Card.Body className="body">
              <Card.Text>
                <h2 className="st_font">Hello,</h2>
                <div className="infoText">
                  <p className="info">
                    I am <b style={{ color: "#ff9800" }}>Mukarram Javid </b>
                    having 2 year experience of full-stack development. I offer
                    the technical expertise you are seeking for web developer
                    position.
                  </p>
                  <p className="info">
                    Since earning my bachelor's degree in Computer Science from
                    University of Engineering & Technology, Lahore. I am having
                    2 years experience of ASP.NET MVC 5. Recently, I have
                    completed my Final Year Project in ASP.NET MVC 5 using
                    Entity Framework 6. Now, I am learning JS library
                    'React.js' & 'Web API'.{" "}
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
