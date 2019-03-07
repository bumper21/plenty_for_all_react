import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.scss'

class Footer extends Component {

  render() {
    
    return (
      <div className="footer footer__list footer--dark ">
        <Container className="footer__container">
          <Row>
            <Col className="footer__menu col-md-3">
              <h3>Overview</h3>
              <ul>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
              </ul>
            </Col>
            <Col className="footer__menu col-md-3">
              <h3>Menu</h3>
              <ul>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
              </ul>
            </Col>
            <Col className="footer__menu col-md-3">
              <h3>More</h3>
              <ul>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
                <li>
                  Something
                </li>
              </ul>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;