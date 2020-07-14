import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to="/" className="color">
              Home
            </Link>
            <br />
            <Link to="/Skills" className="color">
              Skills
            </Link>
            <br />
            <Link to="/Services" className="color">
              Services
            </Link>
            <br />
            <Link to="/Contact" className="color">
              Contact
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Sidebar;
