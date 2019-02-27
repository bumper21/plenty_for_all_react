import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.scss'

class HomePageJumbotron extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Where everything thrives</h1>
          <p>because WE are there</p>
        </Container>
      </Jumbotron>
    );
  };
};

export default HomePageJumbotron;