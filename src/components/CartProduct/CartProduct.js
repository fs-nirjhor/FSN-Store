import { Row, Col } from "react-bootstrap";
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
		   <Col xs={5} className="m-auto">
		      <p className="small fw-bold">{title}</p>
		      <h5 className="text-danger">$ {price}</h5>
		   </Col>
		   <Col xs={3} className="m-auto d-flex justify-content-around" >
		     <FontAwesomeIcon icon={faMinus} onClick = { () => dispatch({type:"DECREASE_QUANTITY", product}) }
		     
		     	/>
		     <span className="fw-bold bg-white px-2 mx-1 rounded">{quantity}</span>
		     <FontAwesomeIcon icon={faPlus} onClick = { () => dispatch({type:"INCREASE_QUANTITY", product}) }/>
		   </Col>
		   <Col xs={1} >
		   <p className="text-start">
		   <FontAwesomeIcon icon={faXmark} onClick = { () => dispatch({type:"REMOVE_FROM_CART", product}) } className="text-danger fs-2"/>
		   </p>
		   </Col>
		</Row>
	</div>
);
};

export default CartProduct;