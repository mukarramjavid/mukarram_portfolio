import React, { Suspense, lazy } from "react";
import Sidebar from "./Sidebar";
/*import Home from "./Home";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";*/
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import('./Home'));
const Services = lazy(() => import('./Services'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));
const Main = () => {
  return (
<>
      <Container fluid>
        <Row>
          <Col md={3} xs={12}>
            <Sidebar />
          </Col>
          <Col md={9} xs={12}>
          <Suspense fallback={<div className="loader_img"><img src="/images/profile.JPEG" alt="mloader"/></div>}>
            <Switch>
              <Route exact path="/"  component={Home} />
              <Route exact path="/skill"  component={Skills} />
              <Route exact path="/service"  component={Services} />
              <Route exact path="/contact"  component={Contact} />
            </Switch>
          </Suspense>
          </Col>
        </Row>
      </Container>
      <hr />
      <Footer />
</>
   
  );
};

export default Main;
