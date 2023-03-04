import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { Row, Accordion } from "react-bootstrap";

const ProductCategory = (props) => {
  const { category, index } = props;
  console.log(index);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [category]);
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
     </Accordion.Body>
    </Accordion.Item>
  );
};

export default ProductCategory; 