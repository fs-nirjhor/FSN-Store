import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const SearchedProduct = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const { image, title } = product;
  return (
  	< >
    <ListGroup.Item className="text-wrap">
      <Row>
        <Col xs={2}>
          <img src={image} alt="product" className="w-100" />
        </Col>
        <Col xs={8} className="my-auto">
          {title}
        </Col>
        <Col xs={2} className="my-auto">
          <Button
            variant="success"
            className="w-100 h-100"
            onClick={() => dispatch({ type: "ADD_TO_CART", product })}
          >
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
    </>
  );
};

export default SearchedProduct;
