import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Search from '../components/search'

const CustomersPage = () => {
  return (
    <Layout pageTitle="Customers">
      <Search placeholder="Search customers by name or ID."></Search>

      <br></br>
      <p>Your search for <b>"J"</b> returned:</p>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          <tr>
            <td>Jada Li</td>
            <td>0001</td>
            <td>Customer</td>
            <td>
              <button href="#" className="btn btn-success btn-sm">Edit</button>
              <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Jonathan Liu</td>
            <td>0002</td>
            <td>Administrator</td>
            <td>
              <button href="#" className="btn btn-success btn-sm">Edit</button>
              <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Joshua Chew Jian Xiang</td>
            <td>0003</td>
            <td>Administrator</td>
            <td>
              <button href="#" className="btn btn-success btn-sm">Edit</button>
              <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Jorah Mormont</td>
            <td>0004</td>
            <td>Customer</td>
            <td>
              <button href="#" className="btn btn-success btn-sm">Edit</button>
              <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
          <tr>
            <td>James Patterson</td>
            <td>0005</td>
            <td>Customer</td>
            <td>
              <button href="#" className="btn btn-success btn-sm">Edit</button>
              <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
            </td>
          </tr>
          </thead>
        </table>
    </Layout>
  )
}

export default CustomersPage
