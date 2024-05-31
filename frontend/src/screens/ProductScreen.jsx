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

import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const { id } = useParams();

  const { data: products, isLoading, error } = useGetProductDetailsQuery(id);

  console.log("dataaaa123", products);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data}</Message>
      ) : (
        <>
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
                          {products.countInStock > 0
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
      )}
    </>
  );
};

export default ProductScreen;
