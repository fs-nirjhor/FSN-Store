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
            I'm FS Nirjhor from Khulna. I'm a student of BSC in Botany. Besides my study I'm learning Web Development. My dream is to be a Full-Stack Web Developer. So, I'm learning from online & developing different type of website. I'm practicing my best to reach to my goal.
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
