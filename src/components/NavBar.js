import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = props => {
  const {} = props;

  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#HomePage">
          Temporary Brand Heading
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;