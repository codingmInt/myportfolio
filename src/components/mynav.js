import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/myportfolio">
          <Navbar.Brand>Jayden's Portfolio</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/myportfolio/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myportfolio/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
