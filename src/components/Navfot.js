import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav } from 'react-bootstrap';

export class Navfot extends Component {
    render() {
        return (
<>
<Navbar className="navbarfont"  fixed="bottom" collapseOnSelect  bg="dark" variant="dark">
  <Navbar.Brand  href="#home">Our Solar System</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <LinkContainer activeClassName ="active_class" exact to="/solar">
      <Nav.Link  >Our Solar System</Nav.Link>
      </LinkContainer>
      <LinkContainer  to="/planet" activeClassName ="active_class" exact>
      <Nav.Link >PLANETS|DWARF PLANETS</Nav.Link>
      </LinkContainer>
      <LinkContainer  to="/moon" activeClassName ="active_class" exact>
      <Nav.Link >MOONS</Nav.Link>
      </LinkContainer>
      <LinkContainer  to="/home" activeClassName ="active_class" exact>
      <Nav.Link >ASTEROIDS</Nav.Link>
      </LinkContainer>
      
      
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
)
}
}
export default Navfot;