import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faDollar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import NavLogButton from "../NavLogButton/NavLogButton";

function Header() {
  const [categories, setCategories] = useState([]);
  const state = useSelector((state) => state);
  const { cart, price } = state;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  
  return (
    <nav className="sticky-top">
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={NavLink} to="/" >
          <Logo/>
          </Navbar.Brand>
          <Nav.Link as={NavLink} to="/cart" className="text-light fw-bold">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
            </span>
            <span className="ms-3">
              <FontAwesomeIcon icon={faDollar} /> {price.total}
            </span>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                {categories.map((category) => (
                  <NavDropdown.Item key={category}>{category}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link>
                <NavLogButton/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Header;
