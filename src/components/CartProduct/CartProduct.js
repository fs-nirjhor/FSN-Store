import { Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";

const CartProduct = (props) => {
	const dispatch = useDispatch();
	const {product} = props ;
	const {image, title, price, quantity } = product ;
return (
	<div className="border rounded my-3 shadow bg-secondary bg-opacity-10 p-2">
		<Row >
		   <Col xs={3} >
		      <img src={image} alt="product" className="img-fluid h-100"/>
		   </Col>
		   <Col xs={6} className="m-auto">
		      <p className="small fw-bold">{title}</p>
		      <h5 className="text-danger">$ {price}</h5>
		   </Col>
		   <Col xs={3} className="d-flex flex-column">
		   <p className="ms-auto">
		   <FontAwesomeIcon icon={faXmark} onClick = { () => dispatch({type:"REMOVE_FROM_CART", product}) } className="text-danger fs-1"/>
		   </p>
		   <p className="justify-self-center align-self-center fs-3">
		     <FontAwesomeIcon icon={faMinus} onClick = { () => dispatch({type:"DECREASE_QUANTITY", product}) }
		      className="btn btn-danger"
		     	/>
		     <Badge bg="light" className="text-dark fw-bold mx-2">{quantity}</Badge>
		     <FontAwesomeIcon icon={faPlus} onClick = { () => dispatch({type:"ADD_TO_CART", product}) } className="btn btn-success"/>
		     </p>
		   </Col>
		</Row>
	</div>
);
};

export default CartProduct;