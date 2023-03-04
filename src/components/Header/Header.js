import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";

function Header() {
	const [categories, setCategories] = useState([]);
	const cart = useSelector(state => state.cart);
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
        <span className="h1 text-danger bg-warning rounded-pill py-1 px-3 fst-italic">F S N</span>
        </Navbar.Brand>
        <Nav.Link as={NavLink} to="/cart" className="text-light">
        <FontAwesomeIcon icon = {faShoppingCart}/> <b>{cart.length}</b>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {
              	categories.map(category => 
              	<NavDropdown.Item key={category}>
                {category}
              </NavDropdown.Item>
              	)
              }
            </NavDropdown>
            <Nav.Link as={NavLink} to="/login" className="btn btn-danger text-white px-2">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  );
}

export default Header;