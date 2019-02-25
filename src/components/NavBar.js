import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

const NavBar = props => {
  const {} = props;

  
  return (
    <>
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="pt-4 pb-4">
        <Navbar.Brand href="#HomePage">
          <Image
            src="/images/plums.jpg"
            width="40"
            height="40"
            roundedCircle="true"
            className=""
            alt=""
          />
          {' Plenty For All'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Blog</Nav.Link>
            <Nav.Link href="">Events</Nav.Link>
            <Nav.Link href="">Resources</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
            <Nav.Link href="">Bio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  );
};

export default NavBar;