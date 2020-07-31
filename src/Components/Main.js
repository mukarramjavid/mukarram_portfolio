import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
<>
      <Container fluid>
        <Row>
          <Col md={3} xs={12}>
            <Sidebar />
          </Col>
          <Col md={9} xs={12}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route  path="/Skills" exact component={Skills} />
              <Route  path="/Services" exact component={Services} />
              <Route  path="/Contact" exact component={Contact} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <hr />
      <Footer />
</>
   
  );
};

export default Main;
