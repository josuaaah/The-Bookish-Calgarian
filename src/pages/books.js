import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Layout from "../components/layout"
import Row from "react-bootstrap/Row"

const BooksPage = () => {
  return (
    <Layout pageTitle="Books">
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
    </Layout>
  )
}

export default BooksPage
