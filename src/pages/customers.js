import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"
import Search from '../components/search'

const CustomersPage = () => {
  return (
    <Layout pageTitle="Customers">
    <Search placeholder="Search customers by name or ID."></Search>
    <p>(insert sample customer information here)</p>
    </Layout>
  )
}

export default CustomersPage
