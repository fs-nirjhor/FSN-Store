import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faDollar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {useAuthState} from "react-firebase-hooks/auth" ;

function Header() {
	const [user] = useAuthState(auth);
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLog = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          dispatch({ type: "REMOVE_LOGGED_USER" });
          dispatch({type: "OPEN_POPUP", message: "Logout Successful !"});
        })
        .catch((error) => {
          dispatch({type: "OPEN_POPUP", message:error.code});
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="sticky-top">
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <span className="h1 text-danger bg-warning rounded-pill py-1 px-3 fst-italic">
              F S N
            </span>
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
              <Nav.Link
                className="btn btn-danger text-white px-2"
                onClick={handleLog}
              >
                {user ? "Logout" : "Login"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Header;
