import ProductCategory from "../ProductCategory/ProductCategory";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {useSelector} from "react-redux" ;
import { Link } from "react-router-dom";

const ProductArea = () => {
	const cart = useSelector(state => state.cart);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <section>
    {
    	categories.map(category => <ProductCategory category={category} key={category}/>)
    }
    <Button as={Link} to="/cart" 
    variant = {cart.length ? "danger" : "secondary"}
    disabled = {cart.length ? false : true}
    className="d-block w-50 mx-auto my-3 "
    >Place Order</Button>
    </section>
  );
};

export default ProductArea;
