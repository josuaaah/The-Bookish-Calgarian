import * as React from 'react'

import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/" className="pe-3"><b>The Bookish Calgarian</b></Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/books">Search Books</Nav.Link>
        <Nav.Link href="/wishlist">My Wishlist</Nav.Link>
        <Nav.Link href="/discounts">My Discounts</Nav.Link>
        <Nav.Link href="/sell">Sell Books</Nav.Link>
        <Nav.Link href="/customers">Manage Customers <Badge>Admin</Badge></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation