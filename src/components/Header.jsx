import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="px-3"
      style={{ backgroundColor: "#2f3033" }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-white">
          Pizza House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="rounded-0"
              style={{ width: "200px" }}
              aria-label="Search"
            />
            <Button variant="danger" className="rounded-0 px-3 fw-bold">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
