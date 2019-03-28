import React, { Component } from 'react'
import { Session } from '../../requests'
import { Form, Button } from 'react-bootstrap'

const fromFormData = formData => {
  const newObj= {};

  for (let [name, value] of formData) {
    newObj[name] = value;
  }

  return newObj;
};

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    }

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Session.create(fromFormData(formData)).then(data => {
      if (data.status === "error") {
        this.setState({
          errors: [data.message]
        });

        return;
      }

      if (typeof this.props.onSignIn === "function") {
        this.props.onSignIn();
      }
      this.props.history.push("/");
    });
  }

  render() {
    const { errors } = this.state;

    return(
      <main className="SignInPage">
        <h1>Sign In</h1>
        <Form onSubmit={this.createSession}>
          {errors.length > 0 ? (
            <p className="formErrors">
              {errors.join(",")}
            </p>
          ) : null}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign-In
          </Button>
        </Form>
      </main>
    )
  }
}