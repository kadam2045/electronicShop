import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";

import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const adddToCartHandler = (item, qty) => {
    dispatch(addToCart({ ...item, qty }));
  };

  return (
    <Row>
      <Col>
        <h3>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty <Link to="/">Go Back To Shopping </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{item.price}</Col>

                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        adddToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item?.countInStock).keys()].map((x) => (
                        <option key={x + 1}> {x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={3}>
                    <Button type="button" variant="light">
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                items )
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed()}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
              >
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
