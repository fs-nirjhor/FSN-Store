import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="m-auto h-100 text-center lh-base font-monospace">
      <h1 className="display-1 fw-bold">4 0 4</h1>
      <p className="fs-3">Oops! The page you requested could not be found.</p>
      <Link to="/" className="fw-bolder fs-5 text-decoration-none">Back to home</Link>
    </Container>
  );
};

export default NotFound;