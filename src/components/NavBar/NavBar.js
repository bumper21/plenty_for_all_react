import React from 'react';
import { Navbar, Nav, Image, Container, NavDropdown } from 'react-bootstrap';
import './NavBar.scss'
import LeafSky from '../../images/leaf-sky.jpg'

const NavBar = props => {
  // const {} = props;

  return (
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
    <Navbar.Brand>
      <img
        src={LeafSky}
        width="40"
        height="40"
        className="d-inline-block rounded-circle"
        alt=""
        />
    </Navbar.Brand>
    <Navbar.Brand href="/">Plenty for All</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar;



// <Nav.Link className="text-dark" href="">Blog</Nav.Link>
// <Nav.Link className="text-dark" href="">Events</Nav.Link>
// <Nav.Link className="text-dark" href="">Courses</Nav.Link>
// <Nav.Link className="text-dark" href="">Resources</Nav.Link>
// <Nav.Link className="text-dark" href="">Contact</Nav.Link>
// <Nav.Link className="text-dark" href="">Bio</Nav.Link>