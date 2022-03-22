import * as React from "react"

import Container from "react-bootstrap/Container"

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <Container className="p-5">
      <h1>Oh snap!</h1>
      <p>There's nothing here! You might have fallen down the wrong rabbit hole.</p>
      </Container>
    </main>
  )
}

export default NotFoundPage
