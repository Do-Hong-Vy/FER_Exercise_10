import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { pizzas } from "../data/pizzas";

function Menu() {
  return (
    <Container className="my-5">
      <h2 className="text-white mb-4">Our Menu</h2>
      <Row>
        {pizzas.map((pizza) => (
          <Col md={3} key={pizza.id} className="mb-4">
            <Card className="h-100 position-relative">
              {pizza.sale && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-0 m-2 px-3 py-2 fs-6 rounded-0"
                  style={{ zIndex: 1 }}
                >
                  SALE
                </Badge>
              )}
              {pizza.id === 3 && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-0 m-2 px-3 py-2 fs-6 rounded-0"
                  style={{ zIndex: 1 }}
                >
                  NEW
                </Badge>
              )}

              <Card.Img
                variant="top"
                src={pizza.img}
                alt={pizza.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{pizza.name} Pizza</Card.Title>
                <Card.Text>
                  {pizza.id === 2 || pizza.id === 3 ? (
                    <span>${pizza.price.toFixed(2)}</span>
                  ) : (
                    <span>
                      <del className="text-muted">
                        ${pizza.oldprice.toFixed(2)}
                      </del>
                      <span className="text-warning fw-bold ms-2">
                        ${pizza.price.toFixed(2)}
                      </span>
                    </span>
                  )}
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="dark"
                    className="w-100 bg-dark text-white rounded-0"
                  >
                    Buy
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
