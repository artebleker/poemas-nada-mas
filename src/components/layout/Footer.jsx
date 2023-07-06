import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Footer = () => {
  return (
    // <div className="footer">
    <Navbar bg="secondary" className=" footer" sticky="bottom">
      <Nav className="me-auto">
        <Nav.Link href="/categorias">Categorias</Nav.Link>
        <Nav.Link href="/videos">Videos</Nav.Link>
        <Nav.Link href="/publicaciones">Publicaciones</Nav.Link>
        <Nav.Link href="/login">Ingresar</Nav.Link>
      </Nav>
    </Navbar>
    // </div>
  );
};

export default Footer;
