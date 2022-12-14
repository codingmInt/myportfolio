import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function MyNav() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/myportfolio">
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/myportfolio/about">
              <Nav.Link>ABOUT ME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myportfolio/explore">
              <Nav.Link>EXPLORE</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
