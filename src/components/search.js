import * as React from 'react'

import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

const Search = ({placeholder}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formSearch">
        <Row>
          <Col xs="11">
            <Form.Control type="text" placeholder={placeholder} /> 
          </Col>
          <Col xs="1">
            <button type="button" class="btn btn-primary">Search</button>
          </Col>
        </Row>
      </Form.Group>     
    </Form>
  )
}

export default Search