import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.scss'

class HomePageJumbotron extends Component {
  render() {
    return (
      <Jumbotron className="jumbotron--primary jumbotron--img" fluid>
        <Container className="jumbotron__container">
          <h1 className="jumbotron__heading">Where everything thrives</h1>
          <p className="jumbotron__caption">because we are there</p>
        </Container>
      </Jumbotron>
    );
  };
};

export default HomePageJumbotron;