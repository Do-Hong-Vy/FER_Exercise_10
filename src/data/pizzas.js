import img1 from "../img/pizza1.jpg";
import img2 from "../img/pizza2.jpg";
import img3 from "../img/pizza3.jpg";
import img4 from "../img/pizza4.jpg";

export const pizzas = [
  {
    id: 1,
    name: "Margherita",
    img: img1,
    oldprice: 12.99,
    price: 10.99,
    sale: true,
  },
  {
    id: 2,
    name: "Pepperoni",
    img: img2,
    oldprice: 14.99,
    price: 12.99,
    sale: false,
  },
  {
    id: 3,
    name: "Vegetarian",
    img: img3,
    oldprice: 13.99,
    price: 11.99,
    sale: false,
  },
  {
    id: 4,
    name: "BBQ Chicken",
    img: img4,
    oldprice: 15.99,
    price: 13.99,
    sale: true,
  },
];
