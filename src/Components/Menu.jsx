import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import { Container, Nav, NavDropdown } from 'react-bootstrap';

const Menu = (props) => {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to={"/"}>HticPay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to='/products'>Products</NavLink>                
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Menu