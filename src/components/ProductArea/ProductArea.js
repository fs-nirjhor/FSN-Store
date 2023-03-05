import ProductCategory from "../ProductCategory/ProductCategory";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { Button, Accordion } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux" ;
import { Link } from "react-router-dom";

const ProductArea = () => {
	const cart = useSelector(state => state.cart);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(error => dispatch({type:"OPEN_POPUP", message: error.message}) );
  }, [dispatch]);
  return (
    <section>
    <SearchBox/>
     <Accordion flush>
    {
    	categories.map((category, index) => <ProductCategory category={category} index={index} key={index}/>)
    }
    </Accordion>
    <Button as={Link} to="/cart" 
    variant = {cart.length ? "danger" : "secondary"}
    disabled = {cart.length ? false : true}
    className="d-block w-75 mx-auto my-3 "
    >Place Order</Button>
    </section>
  );
};

export default ProductArea;
