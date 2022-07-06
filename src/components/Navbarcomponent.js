import React from 'react'
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap';

const Navbarcomponent = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="/">TOKO BUKU</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Beranda</Nav.Link>
        <Nav.Link href="list">Tambah Buku</Nav.Link>
        <NavDropdown title="Jenis Buku" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Novel</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ensiklopedia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Komik</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Lainnya...</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navbarcomponent