import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from "../styles.module.css";
import logo from "../resources/logo_white.png";


class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar style={{background: '#5438DC'}} expand="lg">
        <Container>
          <Navbar.Brand href="#home" className={classes.logo}>
            <img height='50px' width='250px' src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className={classes.navlink} href="#home">About Us</Nav.Link>
              <Nav.Link className={classes.navlink} href="#style1">Style 1</Nav.Link>
              <Nav.Link className={classes.navlink} href="#link2">Style 2</Nav.Link>
              <Nav.Link className={classes.navlink} href="#link3">Style 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;