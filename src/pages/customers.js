import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"
import Search from '../components/search'
import Button from "react-bootstrap/Button"

const CustomersPage = () => {
  return (
    <Layout pageTitle="Customers">
    <Search placeholder="Search customers by name or ID."></Search>

    <h1>Search Results</h1>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Role</th>
              <th scope="col">Manage</th>
            </tr>
          <tr>
            <td>Jada Li</td>
            <td>0001</td>
            <td>User</td>
            <td><Button as="input" type="button" class="btn btn-outline-primary" value="edit" /></td>
          </tr>
          <tr>
            <td>Jonathan Liu</td>
            <td>0002</td>
            <td>Admin</td>
            <td><Button as="input" type="button" class="btn btn-outline-primary" value="edit" /></td>
          </tr>
          <tr>
            <td>Joshua Chew</td>
            <td>0003</td>
            <td>Admin</td>
            <td><Button as="input" type="button" class="btn btn-outline-primary" value="edit" /></td>
          </tr>
          </thead>
        </table>
    
    
    </Layout>
  )
}

export default CustomersPage
