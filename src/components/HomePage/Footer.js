import React, { Component } from 'react';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';

import './Footer.scss'

class Footer extends Component {

  render() {
    
    return (
      <div className="footer footer--light">
        <Container>
          <Row>
            <Col>
              <Dropdown.Menu show >
                <Dropdown.Header>
                  Dropdown Header
                </Dropdown.Header>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;