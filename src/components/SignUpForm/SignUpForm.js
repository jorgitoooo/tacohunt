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
const INITIAL_SIGN_UP_STATE = {
  email: "",
  password: "",
  passwordConfirm: "",
  error: null,
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = INITIAL_SIGN_UP_STATE;

    // Bind class methods
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.signUpPost = this.signUpPost.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let { email, password, passwordConfirm } = this.state;

    let error = null;
    if (!email || !isEmail(email)) {
      error = {
        ...error,
        email: "Please enter a valid email.",
      };
      console.log("email");
      console.error(error);
    }

    if (password && password.length >= 8) {
      if (passwordConfirm && password !== passwordConfirm) {
        error = {
          ...error,
          passwordConfirm: "Passwords do not match.",
        };
        console.log("passwordConfirm");
        console.error(error);
      }
    } else {
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
      this.signUpPost(this.state);
      this.setState(INITIAL_SIGN_UP_STATE);
    }
  }

  // Post request to db
  signUpPost(value) {
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
            <ConditionalFormError name="email" error={this.state.error} />
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
            <ConditionalFormError name="password" error={this.state.error} />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              autoComplete="on"
              onChange={this.onFormChange}
              value={this.state.passwordConfirm}
              required
            ></Form.Control>
            <ConditionalFormError
              name="passwordConfirm"
              error={this.state.error}
            />
          </Form.Group>
          <Button block type="submit" variant="info">
            Sign Up
          </Button>
          <hr />
          <Button
            block
            variant="link"
            className="font-weight-bold text-info"
            href="/login"
          >
            Already have an account? Log In.
          </Button>
        </Form>
      </FormContainer>
    );
  }
}

export default SignUpForm;
