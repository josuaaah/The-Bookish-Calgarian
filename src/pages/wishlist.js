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
          <th scope="col">Quality</th>
          <th scope="col">Publication Date</th>
          <th scope="col">Language</th>
          <th scope="col">Genre</th>
          <th scope="col">Availability</th>
        </tr>
      </thead>
    </table>
    </Layout>
  )
}

export default WishlistPage
