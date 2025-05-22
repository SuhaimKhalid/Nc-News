import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

export const HeaderNavbar = ({ selectedUser }) => {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          NC News {selectedUser.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/articles" className="nav-link">
              Articles
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
