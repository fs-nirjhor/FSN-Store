import { Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import SearchedProduct from "../SearchedProduct/SearchedProduct";

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
      <Form.Control
        type="text"
        placeholder="Search Products"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
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
