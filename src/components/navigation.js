import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">The Bookish Calgarian</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/books">Book Search</Nav.Link>
        <Nav.Link href="/wishlist">My Wishlist</Nav.Link>
        <Nav.Link href="/discounts">My Discounts</Nav.Link>
        <Nav.Link href="/customers">Manage Customers</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation