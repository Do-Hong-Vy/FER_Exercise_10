import { Container, Row, Col, Badge, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import {
  BsDropletHalf,
  BsBrightnessHigh,
  BsThermometerHalf,
  BsMoisture,
} from "react-icons/bs";
import { plant } from "../data/plant";

function CareCard({ icon, label, value }) {
  return (
    <Card
      className="border-0 rounded-4 h-100"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
      }}
    >
      <Card.Body className="d-flex align-items-center gap-3 py-3 px-4">
        <div className="text-success" style={{ fontSize: "1.4rem" }}>
          {icon}
        </div>
        <div>
          <div
            className="text-secondary mb-1"
            style={{ fontSize: "0.8rem", fontWeight: 500 }}
          >
            {label}
          </div>
          <div
            className="text-dark"
            style={{ fontSize: "0.95rem", fontWeight: 600 }}
          >
            {value}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function PlantDetail() {
  return (
    <Container className="py-3">
      {/* Back button */}
      <div className="mb-4 mt-2">
        <a
          href="#"
          className="text-dark text-decoration-none d-inline-flex align-items-center gap-2"
          style={{ fontSize: "0.85rem", fontWeight: 500 }}
        >
          <FaArrowLeft size={12} />
          Quay lại
        </a>
      </div>

      <Row className="g-4 align-items-start">
        {/* Plant image */}
        <Col lg={5} md={5} className="pe-lg-5">
          <img
            src={plant.img}
            alt={plant.name}
            className="img-fluid rounded-4 w-100 object-fit-cover"
            style={{ maxHeight: "600px" }}
          />
        </Col>

        {/* Plant info */}
        <Col lg={7} md={7}>
          {/* Difficulty badge */}
          <div className="mb-3 mt-2">
            <span
              className="px-3 py-1 rounded-pill d-inline-block"
              style={{
                backgroundColor: "#e8f5e9",
                color: "#4caf50",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {plant.difficulty}
            </span>
          </div>

          {/* Name */}
          <h1
            className="fw-bold mb-1"
            style={{
              fontSize: "2.8rem",
              color: "#1a1a1a",
              letterSpacing: "-0.5px",
            }}
          >
            {plant.name}
          </h1>
          <p
            className="fst-italic mb-3"
            style={{ fontSize: "1.1rem", color: "#777" }}
          >
            {plant.scientificName}
          </p>

          {/* Tags */}
          <div
            className="d-flex align-items-center gap-2 mb-4"
            style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500 }}
          >
            <span
              className="px-3 py-1 rounded-pill"
              style={{ backgroundColor: "#efefefff" }}
            >
              {plant.tags[0]}
            </span>
            <span
              className="px-3 py-1 rounded-pill"
              style={{ backgroundColor: "#efefefff" }}
            >
              {plant.tags[1]}
            </span>
          </div>

          {/* Description */}
          <p
            className="mb-5"
            style={{ lineHeight: 1.8, fontSize: "1rem", color: "#666" }}
          >
            {plant.description}
          </p>

          {/* Care info grid */}
          <Row className="g-3">
            <Col xs={6}>
              <CareCard
                icon={<BsDropletHalf />}
                label="Tưới nước"
                value={plant.care.water}
              />
            </Col>
            <Col xs={6}>
              <CareCard
                icon={<BsBrightnessHigh />}
                label="Ánh sáng"
                value={plant.care.light}
              />
            </Col>
            <Col xs={6}>
              <CareCard
                icon={<BsThermometerHalf />}
                label="Nhiệt độ"
                value={plant.care.temperature}
              />
            </Col>
            <Col xs={6}>
              <CareCard
                icon={<BsMoisture />}
                label="Độ ẩm"
                value={plant.care.humidity}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Floating AI button */}
      <div
        className="position-fixed d-flex align-items-center justify-content-center rounded-circle shadow"
        style={{
          bottom: "24px",
          right: "24px",
          width: "50px",
          height: "50px",
          backgroundColor: "#2e7d32",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <span className="text-white" style={{ fontSize: "1.2rem" }}>
          🌿
        </span>
      </div>
    </Container>
  );
}

export default PlantDetail;
