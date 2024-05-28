import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ Product }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${Product._id}`}>
        <Card.Img src={Product.image} variant="top" />
      </Link>

      <Card.Body>
        <Card.Title as="div" className="product-title">
          <strong>{Product.name}</strong>
        </Card.Title>
        <Card.Text as="div">
          <Rating
            value={Product.rating}
            text={`${Product.numReviews} Reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${Product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
