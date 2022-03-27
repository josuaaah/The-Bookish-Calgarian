import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Col from 'react-bootstrap/Col'
import Layout from "../components/layout"

const ProfilePage = () => {
  return (
    <Layout pageTitle="My Profile">
    <p>According to your purchase and sales history, you are eligible for <b>ten</b> remaining discounts!</p>

    <h3>My Discounts</h3>
    <Col xs="4">
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date Earned</th>
          <th scope="col">Status</th>
        </tr>
        <tr>
          <td scope="row">1</td>
          <td>10/03/2021</td>
          <td class="text-danger"><b>Used</b></td>
        </tr>
        <tr>
          <td scope="row">2</td>
          <td>07/03/2022</td>
          <td class="text-success"><b>Unused</b></td>
        </tr>
      </thead>
    </table>
    </Col>

    <br></br>

    <h3>My Purchase History</h3>
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
          <th scope="col">Transaction Date</th>
          <th scope="col">Bookstore</th>
        </tr>
          <tr>
            <th scope="row">1</th>
            <td>The Great Gatsby</td>
            <td>$3.99</td>
            <td>0000001</td>
            <td>9780333791035</td>
            <td>F. Scott Fitzgerald</td>
            <td>New Condition</td>
            <td>10/03/2021</td>
            <td>Fish Creek Provincial Bookstore</td>
          </tr>
      </thead>
    </table>

    <br></br>
    
    <h3>My Sale History</h3>
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
          <th scope="col">Transaction Date</th>
          <th scope="col">Bookstore</th>
        </tr>
          <tr>
            <th scope="row">1</th>
            <td>To Kill A Mockingbird</td>
            <td>$17.99</td>
            <td>0000023</td>
            <td>9780060173227</td>
            <td>Harper Lee</td>
            <td>New Condition</td>
            <td>10/03/2021</td>
            <td>Fish Creek Provincial Bookstore</td>
          </tr>
      </thead>
    </table>
    </Layout>
  )
}

export default ProfilePage
