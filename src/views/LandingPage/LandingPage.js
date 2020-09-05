import React, { useState, useEffect } from "react";

// Styled components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Hero from "../../components/Hero";

// Image
import tacoPlaceHolder from "./taco-md.png";

// CSS
import "./LandingPage.css";

function LandingPage(props) {
  const establishments = ["stand", "restaurant", "truck"];

  // State
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interv = setInterval(() => {
      setPos((pos) => (pos + 1) % establishments.length);
    }, 1200);

    return () => clearInterval(interv);
  }, [establishments.length]);

  return (
    <div className="bg-light">
      <Hero>
        <h1
          className="display-4 font-weight-bold text-light"
          style={{ marginTop: "3rem" }}
        >
          <strong>TacoHunt.</strong>
        </h1>
        <p className="font-weight-light text-light lead">
          A delicious taco{" "}
          <mark>
            <strong>{establishments[pos]}</strong>
          </mark>{" "}
          is just a click away.
        </p>
      </Hero>
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="display-4 text-dark">
              This is the hunt of a lifetime.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} className="my-2 mh-100">
            <Card className="w-100 h-100 shadow-sm">
              <Card.Img
                className="w-100 my-5 text-center"
                as="div"
                variant="top"
              >
                <img src={tacoPlaceHolder} alt="TacoHunt placeholder" />
              </Card.Img>
              <Card.Body>
                <Card.Title>Restaurants</Card.Title>
                <Card.Text>
                  Explore some of the tastiest restaurants serving tacos near
                  you.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <Button variant="outline-info">
                  <strong>Hunt for restaurants</strong>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} sm={4} className="my-2 mh-100">
            <Card className="w-100 h-100 shadow-sm">
              <Card.Img
                className="w-100 my-5 text-center"
                as="div"
                variant="top"
              >
                <img src={tacoPlaceHolder} alt="TacoHunt placeholder" />
              </Card.Img>
              <Card.Body>
                <Card.Title>Trucks</Card.Title>
                <Card.Text>
                  Explore some of the tastiest trucks serving tacos near you.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <Button variant="outline-info">
                  <strong>Hunt for trucks</strong>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} sm={4} className="my-2 mh-100">
            <Card className="w-100 h-100 shadow-sm">
              <Card.Img
                className="w-100 my-5 text-center"
                as="div"
                variant="top"
              >
                <img src={tacoPlaceHolder} alt="TacoHunt placeholder" />
              </Card.Img>
              <Card.Body>
                <Card.Title>Stands</Card.Title>
                <Card.Text>
                  Explore some of the tastiest taco stands near you.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <Button variant="outline-info">
                  <strong>Hunt for stands</strong>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="text-center text-muted">
        Developed by{" "}
        <a className="text-dark" href="https://jorgegarcia.co">
          <b>Jorge L. Garcia</b>
        </a>
      </footer>
    </div>
  );
}

export default LandingPage;
