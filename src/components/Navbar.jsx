<<<<<<< HEAD
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          MyProject
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
=======
function Navbar({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("home")}>
        <i className="fa-solid fa-house"></i> Home
      </button>

      <button onClick={() => setPage("about")}>
        <i className="fa-solid fa-circle-info"></i> About
      </button>

      <button onClick={() => setPage("contact")}>
        <i className="fa-solid fa-envelope"></i> Contact
      </button>
    </nav>
  );
}

export default Navbar;
>>>>>>> 55d21f7f94ac0ef029e1771322d12ee9cf449d59
