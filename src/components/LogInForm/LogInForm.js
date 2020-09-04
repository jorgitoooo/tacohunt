import React from "react";
import { isEmail } from "validator";

// Styled components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../containers/FormContainer";

// Form error component
function ConditionalFormError({ error, name }) {
  if (error && error[name]) {
    return <p className="my-1 text-danger font-weight-bold">{error[name]}</p>;
  } else {
    return null;
  }
}

// Initial state
const INITIAL_LOG_IN_STATE = {
  email: "",
  password: "",
  error: null,
};

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = INITIAL_LOG_IN_STATE;

    // Bind class methods
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.logInPost = this.logInPost.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;

    let error = null;
    if (!email || !isEmail(email)) {
      error = {
        ...error,
        email: "Please enter a valid email.",
      };
      console.log("email");
      console.error(error);
    }

    if (!password || password.length < 8) {
      error = {
        ...error,
        password: "A password must have atleast 8 characters.",
      };
      console.log("password");
      console.error(error);
    }

    // Set error
    this.setState({ error });

    if (!error) {
      this.logInPost(this.state);
      this.setState(INITIAL_LOG_IN_STATE);
    }
  }

  // Post request to db
  logInPost(value) {
    console.log(value);
  }

  onFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.onFormChange}
              value={this.state.email}
              required
            ></Form.Control>
            <ConditionalFormError error={this.state.error} name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="on"
              onChange={this.onFormChange}
              value={this.state.password}
              required
            ></Form.Control>
            <ConditionalFormError error={this.state.error} name="password" />
          </Form.Group>
          <Button block type="submit" variant="info">
            Log In
          </Button>
          <hr />
          <Button
            block
            variant="link"
            className="font-weight-bold text-info"
            href="/forgot-password"
          >
            Forgot Password?
          </Button>
        </Form>
      </FormContainer>
    );
  }
}

export default LogInForm;
