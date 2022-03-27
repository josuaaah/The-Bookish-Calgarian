import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Layout from "../components/layout"

const WishlistPage = () => {
  return (
    <Layout pageTitle="My Wishlist">
    <h1 class="text-center display-4">My Wishlist</h1>
    <br></br>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">ISBN</th>
          <th scope="col">Author</th>
          <th scope="col">Publication Date</th>
          <th scope="col">Language</th>
          <th scope="col">Genre</th>
          <th scope="col">Availability</th>
          <th scope="col">Actions</th>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Ninteen Eighty-Four</td>
          <td>9780151660346</td>
          <td>George Orwell</td>
          <td>06/08/1949</td>
          <td>English</td>
          <td>Science Fiction</td>
          <td class="text-success"><b>15 available</b></td>
          <td>
            <button href="#" className="btn btn-success btn-sm">Edit</button>
            <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>The Catcher in the Rye</td>
          <td>9780316769532</td>
          <td>J. D. Salinger</td>
          <td>07/16/1951</td>
          <td>English</td>
          <td>Young Adult Fiction</td>
          <td>0 available</td>
          <td>
            <button href="#" className="btn btn-success btn-sm">Edit</button>
            <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Harry Potter and the Database Management System</td>
          <td>2783315759539</td>
          <td>Eric Wang</td>
          <td>02/05/2022</td>
          <td>English</td>
          <td>Computer Science</td>
          <td>0 available</td>
          <td>
            <button href="#" className="btn btn-success btn-sm">Edit</button>
            <button href="#" className="btn btn-danger btn-sm mx-1">Delete</button>
          </td>
        </tr>
      </thead>
    </table>
    <button type="button" class="btn btn-primary">Add to Wishlist</button>
    </Layout>
  )
}

export default WishlistPage
