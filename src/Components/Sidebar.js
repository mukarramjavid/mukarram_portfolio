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
            <br />
            <NavLink
              exact
              to="/Skills"
              className="color"
              activeClassName="main-nav-active"
            >
              Skills
            </NavLink>
            <br />
            <NavLink
              exact
              to="/Services"
              className="color"
              activeClassName="main-nav-active"
            >
              Services
            </NavLink>
            <br />
            <NavLink
              exact
              to="/Contact"
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
