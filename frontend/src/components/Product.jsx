import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ Product }) => {
  return (
    <Card className="my-3 p-3">
      <Card.Img src={Product.image} variant="top" />
      <Card.Body>
        <Card.Title as="div">
          <strong>{Product.name}</strong>
        </Card.Title>

        <Card.Text as="h3">${Product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
