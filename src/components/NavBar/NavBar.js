import React from "react";
import { Link } from "react-router-dom";

// Styled components
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Row from "react-bootstrap/Row";

// Logo
import logo from "./taco-logo.png";
import userAvatar from "./default-user-avatar.png";

// Initial state
const INITIAL_NAVBAR_STATE = {
  search: "",
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = INITIAL_NAVBAR_STATE;

    // Bind class methods
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // Search for stands/restaurants
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Navbar
        id="main-nav"
        sticky="top"
        bg="white"
        variant="light"
        className="border-bottom border-secondary"
        expand="md"
      >
        <Navbar.Brand id="main-brand" href="/">
          <Image src={logo} alt="TacoHunt Logo" width="60px" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navigation-menu"
          style={{ border: "none" }}
        >
          <Image
            className="border border-info"
            width={40}
            height={40}
            src={userAvatar}
            roundedCircle
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navigation-menu">
          <Nav className="ml-auto">
            <Link to="/hunt">
              <Nav.Link as="div">Hunt</Nav.Link>
            </Link>
            <Link to="/feed">
              <Nav.Link as="div">Feed</Nav.Link>
            </Link>
            <Link to="/profile">
              <Nav.Link as="div">Profile</Nav.Link>
            </Link>
          </Nav>
          {/* TODO: Implement navigation search bar */}
          {/* <Form xs={12} inline onSubmit={this.onSubmit}>
            <div className="d-flex">
              <FormControl
                className="mr-sm-2"
                name="search"
                type="text"
                placeholder="Find your taco..."
                onChange={this.onChange}
                value={this.state.search}
              />
              <Button className="ml-2 ml-sm-0" variant="outline-info">
                Search
              </Button>
            </div>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

/**
 * render() {
    return (
      <Navbar
        id="main-nav"
        sticky="top"
        bg="white"
        variant="light"
        className="d-flex flex-column flex-sm-row border-bottom border-secondary"
        expand="md"
      >
        <Navbar.Brand id="main-brand" href="/">
          <Image src={logo} alt="TacoHunt Logo" width="60px" />
        </Navbar.Brand>
        <Row className="d-flex flex-column-reverse align-items-center flex-sm-row w-100">
          <Col xs={12} sm={3} className="bg-primary">
            <Nav className="mr-sm-auto">
              <Link to="/hunt">
                <Nav.Link as="div">Hunt</Nav.Link>
              </Link>
              <Link to="/feed">
                <Nav.Link as="div">Feed</Nav.Link>
              </Link>
              <Link to="/about">
                <Nav.Link as="div">About</Nav.Link>
              </Link>
            </Nav>
          </Col>
          <Col xs={12} sm={3} className="bg-primary">
            <Form inline onSubmit={this.onSubmit}>
              <div className="d-flex">
                <FormControl
                  className="mr-sm-2"
                  name="search"
                  type="text"
                  placeholder="Find your taco..."
                  onChange={this.onChange}
                  value={this.state.search}
                />
                <Button className="ml-2 ml-sm-0" variant="outline-info">
                  Search
                </Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} sm className="bg-primary d-flex justify-content-end">
            <a href="/me">
              <Image
                className="bg-secondary"
                width={40}
                height={40}
                // src={logo}
                roundedCircle
              />
            </a>
          </Col>
        </Row>
      </Navbar>
    );
  }
 */
