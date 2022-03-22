import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"
import Search from '../components/search'

const BooksPage = () => {
  return (
    <Layout pageTitle="Books">
    <Search placeholder="Search books by title, ISBN or author."></Search>
    <p>(include one sample book search result here)</p>
    </Layout>
  )
}

export default BooksPage
