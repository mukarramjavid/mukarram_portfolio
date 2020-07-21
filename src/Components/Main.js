import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={3} xs={12}>
            <Sidebar />
          </Col>
          <Col md={9} xs={12}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route  path="/skills" exact component={Skills} />
              <Route  path="/services" exact component={Services} />
              <Route  path="/contact" exact component={Contact} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <hr />
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
