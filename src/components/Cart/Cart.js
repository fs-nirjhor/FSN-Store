import {useSelector} from "react-redux";
import CartProduct from "../CartProduct/CartProduct";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
	const cart = useSelector(state => state.cart);
return (
	<div>
	{cart.length === 0 && <h1 className="text-center my-5">No Products Added</h1>}
	  {
	  	cart.map(product => <CartProduct product={product} key={product.id}/>)
	  }
	  <Button as={Link} to="/" size="sm" className="my-3">
	 <FontAwesomeIcon icon={faAdd}/> Add product 
	  </Button>
	  <Button as={Link} to="/pricing" variant="danger" className="d-block w-75 mx-auto my-3 ">Confirm Order</Button>
	</div>
);
};

export default Cart;