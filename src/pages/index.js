import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"

const IndexPage = () => {
  return (
    <>
    <title>The Bookish Calgarian</title>

    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="">The Bookish Calgarian</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/wishlist">My Wishlist</Nav.Link>
        <Nav.Link href="/discounts">My Discounts</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <br></br>

    <Container className="px-5">
      <Form>
        <Row>
          <Col xs="11">
            <Form.Group className="mb-3" controlId="formBookSearch">
              <Form.Control type="text" placeholder="Search books by title, ISBN, author..." />
            </Form.Group>
          </Col>
          <Col xs="1"><Button variant="primary" type="submit">Search</Button></Col>
        </Row>
      </Form>

      <p>(include several book search results here)</p>
    </Container>
    </>
  )
}

export default IndexPage
