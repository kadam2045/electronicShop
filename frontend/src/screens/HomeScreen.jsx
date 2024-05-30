import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsSlice";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  console.log("dataa", data);
  console.log("products", data);
  return (
    <>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : error ? (
        <div>{error?.data}</div>
      ) : (
        <>
          <h1>Latest Product</h1>
          <Row>
            {data?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product Product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;
