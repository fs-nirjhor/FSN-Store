
import { Button, Card, ListGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faDollar } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";


function Product(props) {
	const dispatch = useDispatch();
	const {product} = props;
	const {category, description, image, price, rating, title} = product ;
	const handleAdd = () => {
		dispatch({type: "ADD_TO_CART", product});
	};
  return (
  	< >
  	<Col xs={12} md={6} lg={4} className="p-2">
    <Card className="h-100 shadow">
      <Card.Img variant="top" src={image} className="p-2" height="50%"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text >{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {category}</ListGroup.Item>
        <ListGroup.Item>Stock: {rating.count}</ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faStar} className="text-warning"/> {rating?.rate}</ListGroup.Item>
        <ListGroup.Item className="h3 text-danger"><FontAwesomeIcon icon={faDollar}/> {price}</ListGroup.Item>
      </ListGroup>
        <Card.Footer className="p-0"> 
        <Button className="w-100" onClick = { handleAdd }	>
         <FontAwesomeIcon icon={faShoppingCart}/> Add to cart 
        </Button>
        </Card.Footer>
    </Card>
    </Col>
    </>
  );
}

export default Product;