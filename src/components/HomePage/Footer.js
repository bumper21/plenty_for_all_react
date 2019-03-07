import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.scss'

class Footer extends Component {

  render() {
    
    return (
      <div className="footer-primary footer--dark ">
        <Container className="footer-primary__container">
          <Row className="footer-primary__row">
            <Col className="footer-primary__col col-md-3">
              <h3 className="footer-primary__h3">Overview</h3>
              <ul className="footer-primary__list">
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Features
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Services
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Blog
                 </a>
                </li>
              </ul>
            </Col>
            <Col className="footer-primary__col col-md-3">
              <h3 className="footer-primary__h3">Menu</h3>
              <ul className="footer-primary__list">
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Features
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Services
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Blog
                 </a>
                </li>
              </ul>
            </Col>
            <Col className="footer-primary__col col-md-3">
              <h3 className="footer-primary__h3">More</h3>
              <ul className="footer-primary__list">
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Features
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Services
                 </a>
                </li>
                <li className="footer-primary__item">
                 <a href="" className="footer-primary__link">
                  Blog
                 </a>
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