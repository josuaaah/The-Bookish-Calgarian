import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Form from "react-bootstrap/Form"
import Layout from "../components/layout"
import Search from '../components/search'

const BooksPage = () => {
  return (
    <Layout pageTitle="Books">
      <Search placeholder="Search books by title, ISBN or author."></Search>
      <br></br>
      <p>Your search for <b>"The Great Gatsby"</b> returned:</p>
      <br></br>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Book ID</th>
            <th scope="col">ISBN</th>
            <th scope="col">Author</th>
            <th scope="col">Quality</th>
            <th scope="col">Publication</th>
            <th scope="col">Language</th>
            <th scope="col">Genre</th>
            <th scope="col">Bookstore</th>
            <th scope="col">Shelf</th>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>The Great Gatsby</td>
            <td>$3.99</td>
            <td>0000001</td>
            <td>9780333791035</td>
            <td>F. Scott Fitzgerald</td>
            <td>Used</td>
            <td>04/10/1925</td>
            <td>English</td>
            <td>Historical Fiction</td>
            <td>Books Between Friends</td>
            <td>ML 324 .C54</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>The Great Gatsby</td>
            <td>$10.99</td>
            <td>1203459</td>
            <td>9780333791035</td>
            <td>F. Scott Fitzgerald</td>
            <td>New</td>
            <td>04/10/1925</td>
            <td>English</td>
            <td>Historical Fiction</td>
            <td>Peace Bridge Books</td>
            <td>ML 325 .C24</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>The Great Gatsby</td>
            <td>$10.99</td>
            <td>1903652</td>
            <td>9780333791035</td>
            <td>F. Scott Fitzgerald</td>
            <td>New</td>
            <td>04/10/1925</td>
            <td>English</td>
            <td>Historical Fiction</td>
            <td>Dalhousie Books</td>
            <td>ML 125 .C89</td>
          </tr>
        </thead>
      </table>
    </Layout>
  )
}

export default BooksPage
