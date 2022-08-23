import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import { Container, Nav } from 'react-bootstrap';

const Menu = (props) => {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to={'/'}>HticPay</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to='/products'>Products list</NavLink>                
              </Nav>
              <Nav className="me-auto">
                <NavLink to='/addProduct'>Add Product</NavLink>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Menu