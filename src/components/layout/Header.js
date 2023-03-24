import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../img/logopngchico.png'
const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg" className='header-container' sticky="top">
      <Navbar.Brand href="/"><img src={logo} alt="Poemas nada más" className='logo-header'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/categorias">Categorias</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/publicaciones">Publicaciones</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header