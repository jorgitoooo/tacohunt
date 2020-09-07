import React, { useState, useEffect } from "react";
import validator from "validator";

// Styled components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Hero from "../../components/Hero";

// Image
import restaurantIcon from "./restaurant-icon.png";
import truckIcon from "./truck-icon.png";
import standIcon from "./stand-icon.png";

// CSS
import "./LandingPage.css";

function LandingPage(props) {
  const establishments = ["stand", "restaurant", "truck"];

  // State
  const [pos, setPos] = useState(0);
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (validator.isEmail(email)) {
      // TODO: Save email (redirect to thank you page?)
      console.log(email);
    } else {
      alert("Invalid email");
    }
  }

  function onChange(e) {
    setEmail(e.target.value);
  }

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
      <Container fluid className="my-5">
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
                <img
                  className="img-fluid"
                  src={restaurantIcon}
                  style={{ height: "200px" }}
                  alt="TacoHunt restaurant icon"
                />
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
                <img
                  className="img-fluid"
                  src={truckIcon}
                  style={{ height: "200px" }}
                  alt="TacoHunt truck icon"
                />
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
                <img
                  className="img-fluid"
                  src={standIcon}
                  style={{ height: "200px" }}
                  alt="TacoHunt stand icon"
                />
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
      <Container fluid className="p-5 my-10 bg-info text-center text-white">
        <h2>Subscribe to get some tacorrific offers.</h2>
        <p>We promise not to spam you.</p>
        <Form
          inline
          onSubmit={onSubmit}
          className="d-flex justify-content-center"
        >
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={onChange}
              value={email}
            ></Form.Control>
          </Form.Group>
          <Button className="ml-2" type="submit" variant="outline-light">
            <b>Subscribe</b>
          </Button>
        </Form>
      </Container>
      <footer className="p-5 text-center text-muted">
        Developed by{" "}
        <a className="text-dark" href="https://jorgegarcia.co">
          <b>Jorge L. Garcia</b>
        </a>
      </footer>
    </div>
  );
}

export default LandingPage;
