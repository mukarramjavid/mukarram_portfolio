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
              <Route path="/" exact> <Home/></Route>
              <Route  path="/skills" ><Skills/></Route>
              <Route  path="/services"><Services/></Route>
              <Route  path="/contact" ><Contact/></Route>
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
