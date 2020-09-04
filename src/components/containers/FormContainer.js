import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function FormContainer({ children }) {
  return (
    <Row style={{ textAlign: "center" }}>
      <Col>
        <Card className="shadow" bg="white" border="info">
          <Card.Body>{children}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default FormContainer;
