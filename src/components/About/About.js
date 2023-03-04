import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Nirjhor from "../../images/Nirjhor-rounded.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="about-body my-4">
      <Row xs={1} md={2}>
        <Col className="my-2">
          <img src={Nirjhor} alt="nirjhor" className="w-100" />
        </Col>
        <Col>
          <h1> FS Nirjhor</h1>
          <h3 className="text-muted">Developer: FSN Store</h3>
          <p>
            Hi, I'm FS Nirjhor. I'm completing my BSC in Botany. Besides I'm
            learning Web Development. My Goal is being an expert Web Developer.
            To reach my destination I'm practicing hardly. Everyday I spend
            minimum 10 hours for learning new technologies and practising it. I
            believe that I can do the best in this area. Hard work is the key
            and I'm doing my best.
          </p>
          <p>
            "FSN-Store" is a assignment project for 
            <br />
            <Link
              to="https://facebook.com/groups/610981260721948/"
              className="text-decoration-none font-monospace"
            >
              Code With Bishwa
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
