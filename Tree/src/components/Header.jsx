import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { PiLeafFill } from "react-icons/pi";
import { BsBrightnessHigh } from "react-icons/bs";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-white py-2 sticky-top"
      style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center gap-2 fw-bold text-success fs-5"
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#1b5e20",
            }}
          >
            <PiLeafFill className="text-white" size={20} />
          </div>
          <span style={{ color: "#1a1a1a" }}>Plantify</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Trang chủ
            </Nav.Link>
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Khám phá
            </Nav.Link>
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Gian hàng
            </Nav.Link>
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Bác sĩ AI
            </Nav.Link>
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Đồ thị tri thức
            </Nav.Link>
            <Nav.Link href="#" className="text-dark fw-medium px-3">
              Blog
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-4">
            <BsBrightnessHigh
              className="text-secondary"
              size={20}
              style={{ cursor: "pointer" }}
            />
            <Nav.Link
              href="#"
              className="text-dark fw-medium px-0"
              style={{ fontSize: "0.95rem" }}
            >
              Hỏi AI
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-dark fw-medium px-0"
              style={{ fontSize: "0.95rem" }}
            >
              Đăng nhập
            </Nav.Link>
            <Button
              variant="success"
              className="rounded-pill px-4 fw-medium border-0"
              style={{ fontSize: "0.95rem", backgroundColor: "#1b5e20" }}
            >
              Đăng ký
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
