import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"

const SellPage = ({ placeholder }) => {
  return (
    <Layout pageTitle="Sell Books">

        <h1>Your Books Available</h1>
        <a href="/add_book" class="btn btn-link" role="button">Add Book</a> 
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
                    <th scope="col">Publication Date</th>
                    <th scope="col">Language</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Shelf</th>
                    <th scope="col">Stock</th>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>The Great Gatsby</td>
                    <td>$3.99</td>
                    <td>0000001</td>
                    <td>9780333791035</td>
                    <td>F. Scott Fitzgerald</td>
                    <td>New Condition</td>
                    <td>04/10/1925</td>
                    <td>English</td>
                    <td>Historical Fiction</td>
                    <td>ML<br/>324<br/>.C54</td>
                    <td>3</td>
                </tr>
            </thead>
        </table>
          <h1>Your Books Sold</h1>
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
                      <th scope="col">Publication Date</th>
                      <th scope="col">Language</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Stock</th>
                  </tr>
                  <tr>
                      <th scope="row">1</th>
                      <td>The Great Gatsby</td>
                      <td>$3.99</td>
                      <td>0000001</td>
                      <td>9780333791035</td>
                      <td>F. Scott Fitzgerald</td>
                      <td>New Condition</td>
                      <td>04/10/1925</td>
                      <td>English</td>
                      <td>Historical Fiction</td>
                      <td>1</td>
                  </tr>
              </thead>
          </table>
    </Layout>
  )
}

export default SellPage