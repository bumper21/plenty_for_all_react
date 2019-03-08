import React, {Component} from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

import BarrelGarden from '../../../images/barrel-gardens.JPG';
import HandsInDirt from '../../../images/hands-in-dirt.jpg';
import MartinTeaching from '../../../images/martin-teaching.jpg';
import PlateOfFood from '../../../images/plate-of-food.jpg';
import './HomePageCards.scss';

class HomePageCardDeck extends Component {
  
  render() {
    return (
      <Container className="mt-5 mb-5">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={BarrelGarden} />
            <Card.Body>
              <Card.Title>Grow In Small Urban Spaces</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={HandsInDirt} />
            <Card.Body>
              <Card.Title>Find Out What The Land Wants </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={MartinTeaching} />
            <Card.Body>
              <Card.Title>Learn Together</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={PlateOfFood} />
            <Card.Body>
              <Card.Title>From Yard to Plate</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    )
  }
}

export default HomePageCardDeck;