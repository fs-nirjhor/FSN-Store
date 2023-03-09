import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3 mt-auto">
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <Logo />
          </Col>
          <Col>
            <Link
              to="/blog"
              className="text-decoration-none d-block text-light mb-2"
            >
              Our blog
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none d-block text-light mb-2"
            >
              Contact us
            </Link>
            <Link
              to="/policy"
              className="text-decoration-none d-block text-light mb-2"
            >
              Privacy Policy
            </Link>
          </Col>
        </Row>
        <p className="small text-muted text-center mt-2">
          Copyright &copy; 2023 - FSN
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
