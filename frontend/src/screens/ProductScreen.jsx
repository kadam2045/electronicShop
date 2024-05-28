import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const [products, setProducts] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/products/${productId}`);

      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={products?.image} alt="productImage" fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{products.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={products.rating}
                text={`${products.numReviews} Reviews `}
              />
            </ListGroupItem>
            <ListGroupItem>Price : `${products.price}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{products.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {products.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={products.countInStock === 0}
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
