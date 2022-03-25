import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"

const WishlistPage = () => {
  return (
    <Layout pageTitle="My Wishlist">
      <h1>My Wishlist</h1>
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
          <th scope="col">Availability</th>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Ninteen Eighty-Four</td>
          <td>$10.99</td>
          <td>000105</td>
          <td>9780151660346</td>
          <td>George Orwell</td>
          <td>Used Condition</td>
          <td>06/08/1949</td>
          <td>English</td>
          <td>Science Fiction</td>
          <td>Out of Stock</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>The Catcher in the Rye</td>
          <td>$11.99</td>
          <td>020044</td>
          <td>9780316769532</td>
          <td>J. D. Salinger</td>
          <td>New Condition</td>
          <td>07/16/1951</td>
          <td>English</td>
          <td>Young Adult Fiction</td>
          <td>In Stock</td>
        </tr>

      </thead>
    </table>
    </Layout>
  )
}

export default WishlistPage
