import * as React from 'react'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Search = ({placeholder}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Control type="text" placeholder={placeholder} />
        <button type="button" class="btn btn-primary">Search</button>
      </Form.Group>     
    </Form>
  )
}

export default Search