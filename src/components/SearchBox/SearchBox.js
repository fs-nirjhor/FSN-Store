import { Form, ListGroup, InputGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import SearchedProduct from "../SearchedProduct/SearchedProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const searchProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue?.toLowerCase())
  );

  return (
    <section className="my-5">
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search Products"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button variant="outline-danger" onClick = { () => setSearchValue('') }
      
      	>
          <FontAwesomeIcon icon={faXmark} className="fs-4"/>
        </Button>
      </InputGroup>
      <ListGroup>
        {searchValue &&
          searchProducts.map((product) => (
            <SearchedProduct product={product} key={product.id} />
          ))}
      </ListGroup>
    </section>
  );
};

export default SearchBox;
