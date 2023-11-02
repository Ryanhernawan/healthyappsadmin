import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Navbar.Brand href="#home">Super Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link
                className="text-decoration-none text-white"
                to="/ManageRecipe"
              >
                ManageRecipe
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                className="text-decoration-none text-white"
                to="/ManageWorkout"
              >
                ManageWorkout
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                className="text-decoration-none text-white"
                to="/ManageArtikel"
              >
                ManageArticle
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/">
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
