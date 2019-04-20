import React, { Component } from 'react'
import { Session } from '../../requests'
// import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: '',
      credentials: {
        email: '', password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
  }

  handleChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  login() {
    Session.create().then(res => console.log(res))
  }

  render() {
    const { errors } = this.state;
    
    return(
      <main className="LoginPage">
        <h1>Login</h1>
        <Form onSubmit={this.login} >
          {errors.length > 0 ? (
            <p className="errors">
              {errors.join(",")}
            </p>
          ) : null}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.credentials.email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} name="password" value={this.state.credentials.password} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </main>
    )
  }
}
