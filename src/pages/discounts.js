import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"

const DiscountsPage = () => {
  return (
    <Layout pageTitle="My Discounts">

    <h1>Purchase History</h1>
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
        </tr>
      </thead>
    </table>
    
    <h1>Sales History</h1>
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
        </tr>
      </thead>
    </table>

    <h1>Discount Usage</h1>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
    </table>

    </Layout>
  )
}

export default DiscountsPage
