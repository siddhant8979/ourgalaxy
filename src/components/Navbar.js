import {React,Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkContainer} from 'react-router-bootstrap';
import logo from './image/logo.gif';
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
export class Navone extends Component {
    render() {
        return (
<>
<div className="navbarclass">
<Navbar  fixed="top" variant="dark" expand="lg">
<img src={logo} width="45" alt="" className="logonav d-inline-block align-middle mr-2"/>
<LinkContainer   to="/">
  <Navbar.Brand ><span className="beautiful1">Our Beautiful Galaxy</span></Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <LinkContainer activeClassName ="active_class" exact to="/solar">
      <Nav.Link  >Solar System</Nav.Link>
      </LinkContainer>
      <NavDropdown activeClassName ="active_class"   variant="dark" title="More"  id="navbarScrollingDropdown">
      <Container>
      <LinkContainer  to="/service" activeClassName ="active_class" exact>
        <NavDropdown.Item>Service</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer  to="/service" activeClassName ="active_class" exact>
      <NavDropdown.Item >Another action</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <LinkContainer  to="/service" activeClassName ="active_class" exact>
      <NavDropdown.Item>Something else here</NavDropdown.Item>
      </LinkContainer>
      </Container>
      </NavDropdown>
      <LinkContainer  to="/planet" activeClassName ="active_class" exact>
      <Nav.Link >Planets</Nav.Link>
      </LinkContainer>
      <LinkContainer  to="/moon" activeClassName ="active_class" exact>
      <Nav.Link >Moons</Nav.Link>
      </LinkContainer>
      <LinkContainer  to="/moon" activeClassName ="active_class" exact>
      <Nav.Link >Asteroids,Comets & Meteors</Nav.Link>
      </LinkContainer>
      
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</>
)
}
}
export default Navone ;