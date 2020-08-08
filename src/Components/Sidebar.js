import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Card style={{ border: "none" }} className="card-style">
        <Card.Body className="body">
          <Card.Title className="title">
            <h1 className="img">pic</h1>
            Mukarram Javid
          </Card.Title>
          <Card.Text className="btns">
            <NavLink
              exact
              to="/"
              className="color"
              activeClassName="main-nav-active"
            >
              Home
            </NavLink>
           </br>
            <NavLink
              exact
              to="/skill"
              className="color"
              activeClassName="main-nav-active"
            >
              Skills
            </NavLink>
          </br>
            <NavLink
              exact
              to="/service"
              className="color"
              activeClassName="main-nav-active"
            >
              Services
            </NavLink>
       
            <NavLink
              exact
              to="/contact"
              className="color"
              activeClassName="main-nav-active"
            >
              Contact
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Sidebar;
