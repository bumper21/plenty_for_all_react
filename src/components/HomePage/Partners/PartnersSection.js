import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './PartnersSection.scss';
import ActionLogo from '../../../images/action-logo.png';

class HomePagePartners extends Component {
  render() {
    return (
      <div className="partners-section">
        <Container className="partners-section__container">
          <h1 className="partners-section__heading">
            Partners
          </h1>
          <Row className="partners-section__row">
            <Col className="partners-section__col partners-section__logos col-md-3">
              <Image className="partners-section--action-logo" src={ActionLogo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomePagePartners;