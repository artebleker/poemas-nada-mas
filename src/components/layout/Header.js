import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg" className='header-container' sticky="top">
    {/* <div className="header-container"> */}
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/categorias">Categorias</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/publicaciones">Publicaciones</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    {/* </div> */}
  </Navbar>
  )
}

export default Header