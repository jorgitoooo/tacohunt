import React from "react";
import { Link } from "react-router-dom";

// Styled components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        className="d-flex flex-column flex-sm-row"
        style={{ opacity: 0.95 }}
      >
        <Navbar.Brand id="main-brand" href="/">
          <strong>TacoHunt</strong>{" "}
          <span role="img" aria-label="Taco emoji" aria-labelledby="main-brand">
            🌮
          </span>
        </Navbar.Brand>
        <div className="d-flex flex-column-reverse align-items-center flex-sm-row w-100">
          <Nav className="mr-sm-auto">
            <Link to="/feed">
              <Nav.Link as="div">Feed</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link as="div">About</Nav.Link>
            </Link>
          </Nav>
          <Form inline onSubmit={this.onSubmit}>
            <div className="d-flex flex-row">
              <FormControl
                className="mr-sm-2"
                name="search"
                type="text"
                placeholder="Find a taco..."
                onChange={this.onChange}
                value={this.state.search}
              />
              <Button className="ml-2 ml-sm-0" variant="outline-info">
                Search
              </Button>
            </div>
          </Form>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
