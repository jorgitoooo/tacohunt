import React from "react";
import { Link } from "react-router-dom";

// Styled components
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

// CSS
import "./Hero.css";

function Hero({ children, ...props }) {
  return (
    <Jumbotron fluid>
      <Container>
        {children}
        <Container>
          <Row>
            <Col xs={12} sm={4} className="m-1">
              <Link to="/signup">
                <Button as="div" variant="info" style={{ width: "100%" }}>
                  <strong>Sign Up</strong>
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={4} className="m-1">
              <Link to="/login">
                <Button
                  as="div"
                  variant="outline-info text-white"
                  style={{ width: "100%" }}
                >
                  <strong>Log In</strong>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
