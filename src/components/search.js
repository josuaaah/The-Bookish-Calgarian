import * as React from 'react'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Search = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Search Books by Title, ISBN, or Author"/>
        <Button as="input" type="search" value="Search"/>
      </Form.Group>

      <Form.Group>
        <h1>Search Results</h1>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Book ID</th>
              <th scope="col">ISBN</th>
              <th scope="col">Quality</th>
              <th scope="col">Publication Date</th>
              <th scope="col">Language</th>
              <th scope="col">Genre</th>
              <th scope="col">Availability</th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>The Great Gatsby</td>
              <td>$3.99</td>
              <td>0000001</td>
              <td>9780333791035</td>
              <td>New Condition</td>
              <td>04/10/1925</td>
              <td>English</td>
              <td>Historical Fiction</td>
              <td>In Stock</td>
            </tr>
          </thead>
        </table>
      </Form.Group>
    </Form>
  )
}

export default Search