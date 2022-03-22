import * as React from 'react'

import Form from "react-bootstrap/Form"

const Search = ({ placeholder }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Control type="text" placeholder={placeholder} />
      </Form.Group>
    </Form>
  )
}

export default Search