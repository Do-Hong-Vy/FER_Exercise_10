import { Form, Button, Row, Col, Container } from "react-bootstrap";

function Forms() {
  return (
    <Container className="my-5 py-4">
      <h2 className="text-center text-white mb-4">Book Your Table</h2>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control type="text" placeholder="Your Name *" />
          </Col>
          <Col md={4}>
            <Form.Control type="date" />
          </Col>
          <Col md={4}>
            <Form.Select defaultValue="Select a Service">
              <option disabled>Select a Service</option>
              <option value="1">Dine-in</option>
              <option value="2">Takeout</option>
              <option value="3">Delivery</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Please write your comment"
          />
        </Form.Group>
        <Button
          variant="warning"
          type="submit"
          className="text-white fw-bold"
          style={{
            backgroundColor: "#ffc107",
            border: "none",
            padding: "10px 20px",
          }}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Forms;
