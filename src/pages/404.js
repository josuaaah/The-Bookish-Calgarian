import * as React from "react"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not Found">
      <h1>Oh snap!</h1>
      <p>There's nothing here! You might have fallen down the wrong rabbit hole.</p>
    </Layout>
  )
}

export default NotFoundPage
