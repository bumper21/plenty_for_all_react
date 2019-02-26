import React from 'react';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';

const NavBar = props => {
  const {} = props;

  
  return (
    <Container>
      <>
      <Navbar collapseOnSelect expand="lg" bg="white" className="justify-content-center pt-4 pb-4">
        <Navbar.Brand href="#HomePage">
          <Image
            src="/images/plums.jpg"
            width="40"
            height="40"
            roundedCircle="true"
            alt=""
          />
          {' Plenty For All'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="text-dark" href="">Blog</Nav.Link>
            <Nav.Link className="text-dark" href="">Events</Nav.Link>
            <Nav.Link className="text-dark" href="">Resources</Nav.Link>
            <Nav.Link className="text-dark" href="">Contact</Nav.Link>
            <Nav.Link className="text-dark" href="">Bio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    </Container>
    
  );
};

export default NavBar;