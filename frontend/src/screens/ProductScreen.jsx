import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroupItem,
  Image,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const selectProduct = products.find((p) => p._id === productId);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={selectProduct.image} alt="productImage" fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{selectProduct.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={selectProduct.rating}
                text={`${selectProduct.numReviews} Reviews `}
              />
            </ListGroupItem>
            <ListGroupItem>Price : `${selectProduct.price}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{selectProduct.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {selectProduct.countInStock > 0
                        ? "In Stock"
                        : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={selectProduct.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
