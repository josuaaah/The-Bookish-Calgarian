import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"
import Search from '../components/search'

const CustomersPage = () => {
  return (
    <Layout pageTitle="Customers">
    <Search placeholder="Search customers by name or ID."/>

    <h1>Search Results</h1>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
        </table>
    
    
    </Layout>
  )
}

export default CustomersPage
