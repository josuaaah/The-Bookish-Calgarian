import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Navigation from './navigation'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div>
        <title>{pageTitle}</title>
        <main>
          <Navigation></Navigation>
          <br></br>
          <Container>{children}</Container>
        </main>
      </div>
    </>
  )
}

export default Layout