import Carousel from "react-bootstrap/Carousel";
import { slides } from "../data/slides";

function Banner() {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={slide.img}
            alt={slide.title}
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
