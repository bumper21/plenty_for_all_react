import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
        <Nav.Link href="#features">Events</Nav.Link>
        <Nav.Link href="#pricing">Courses</Nav.Link>
        <NavDropdown title="Blog" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.4">Blog Home</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Blog 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Blog 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Blog 3</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#pricing">Resources</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
        <Nav.Link href="#pricing">Bio</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#more-resources">More resources</Nav.Link>
        <Nav.Link href="#extras">
          Extras
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