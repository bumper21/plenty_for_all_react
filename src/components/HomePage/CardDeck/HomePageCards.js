import React, {Component} from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

import BarrelGarden from '../../../images/barrel-gardens.JPG';
import HandsInDirt from '../../../images/hands-in-dirt.jpg';

class HomePageCardDeck extends Component {
  
  render() {
    return (
      <Container id="HomePageCardDeckContainer" className="mt-5">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={BarrelGarden} />
            <Card.Body>
              <Card.Title>Learn to Grow in Small Urban Spaces</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={HandsInDirt} />
            <Card.Body>
              <Card.Title>Learn to Grow in Small Urban Spaces</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={BarrelGarden} />
            <Card.Body>
              <Card.Title>Learn to Grow in Small Urban Spaces</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={BarrelGarden} />
            <Card.Body>
              <Card.Title>Learn to Grow in Small Urban Spaces</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={BarrelGarden} />
            <Card.Body>
              <Card.Title>Learn to Grow in Small Urban Spaces</Card.Title>
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