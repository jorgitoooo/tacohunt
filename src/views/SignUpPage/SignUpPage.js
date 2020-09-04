import React from "react";

// Styled components
import SignUpForm from "../../components/SignUpForm";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function SignUpPage(props) {
  return (
    <Container
      fluid
      className="d-flex flex-column align-content-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <Row>
        <Col xs={12} sm={{ span: 6, offset: 3 }}>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
