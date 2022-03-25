import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"

const ProfilePage = () => {
  return (
    <Layout pageTitle="My Profile">

    <h1>Purchase History</h1>
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
          <th scope="col">Author</th>
          <th scope="col">Quality</th>
          <th scope="col">Publication Date</th>
          <th scope="col">Language</th>
          <th scope="col">Genre</th>
        </tr>
          <tr>
            <th scope="row">1</th>
            <td>To Kill A Mockingbird</td>
            <td>$17.99</td>
            <td>0000023</td>
            <td>9780060173227</td>
            <td>Harper Lee</td>
            <td>New Condition</td>
            <td>07/11/1960</td>
            <td>English</td>
            <td>Thriller</td>
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
        <tr>
          <td scope="row">1</td>
          <td>03/24/2022</td>
        </tr>
      </thead>
    </table>

    </Layout>
  )
}

export default ProfilePage
