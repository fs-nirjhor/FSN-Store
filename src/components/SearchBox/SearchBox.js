import { InputGroup, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div>
      <InputGroup className="my-5">
        <Form.Control placeholder="Search Products" />
        <Button variant="danger">Search</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
