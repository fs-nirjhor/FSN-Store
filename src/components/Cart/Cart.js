import {useSelector} from "react-redux";
import CartProduct from "../CartProduct/CartProduct";
import Pricing from "../Pricing/Pricing";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cart = () => {
	const cart = useSelector(state => state.cart);
return (
	<div>
	  {
	  	cart.map(product => <CartProduct product={product} key={product.id}/>)
	  }
	  <Pricing/>
	  <Button variant="danger" className="d-block w-50 mx-auto my-3 ">Confirm Order</Button>
	</div>
);
};

export default Cart;