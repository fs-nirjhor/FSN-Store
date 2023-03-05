import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { Row, Accordion, Pagination } from "react-bootstrap";

const ProductCategory = (props) => {
  const { category, index } = props;
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
      
      <Pagination size="lg" className="justify-content-center my-3">
      <Pagination.Prev disabled/>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    
     </Accordion.Body>
    </Accordion.Item>
  );
};

export default ProductCategory; 