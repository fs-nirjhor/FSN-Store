import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { Row, Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Page from "../Page/Page";

const ProductCategory = (props) => {
  const { category, index } = props;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) =>
        dispatch({ type: "OPEN_POPUP", message: error.message })
      );
  }, [category, dispatch]);
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <h4 className="text-danger">{category.toUpperCase()}</h4>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Row>
        <Page />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ProductCategory;
