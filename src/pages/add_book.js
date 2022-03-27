import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Form from "react-bootstrap/Form"
import Layout from "../components/layout"

const AddBookPage = ({ placeholder }) => {
    return (
        <Layout pageTitle="Sell Books">
            <Form>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Book Title" />

                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="($) CAD" />

                <Form.Label>Book ID</Form.Label>
                <Form.Control type="text" placeholder="Book id" />

                <Form.Label>ISBN</Form.Label>
                <Form.Control type="number" placeholder="ISBN" />

                <Form.Label>Publication Date</Form.Label>
                <Form.Control type="date" />

                <Form.Label>Page Count</Form.Label>
                <Form.Control type="text" placeholder="Page Count" />


                <Form.Label>Word Count</Form.Label>
                <Form.Control type="text" placeholder="Word Count" />

                <Form.Label>Fiction/Non-Fiction</Form.Label>
                <Form.Select aria-label="Genre">
                    <option selected>Select Option</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                </Form.Select>

                <Form.Label>Fiction</Form.Label>
                <Form.Select aria-label="Fiction">
                    <option selected>Select Option</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Detetive & Mystery">Detective & Mystery</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
                    <option vlaue="LGBTQ+">LGBTQ+</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Young Adult (YA)">Young Adult (YA)</option>
                    <option value="Children's Fiction">Children's Fiction</option>
                </Form.Select>

                <Form.Label>Non-Fiction</Form.Label>
                <Form.Select aria-label="Non-Fiction">
                    <option selected>Select Option</option>
                    <option value="Memoir & Autobiography">Memoir & Autobiography</option>
                    <option value="Biography">Biography</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Art & Photography">Art & Photography</option>
                    <option value="Self-Help/Personal Development">Self-Help/Personal Development</option>
                    <option value="Motivational/Inspirational">Motivational/Inspirational</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="History">History</option>
                    <option value="Crafts, Hobbies & Home">Crafts, Hobbies & Home</option>
                    <option value="Families & Relationships">Families & Relationships</option>
                    <option value="Humor & Entertainment">Humor & Entertainment</option>
                    <option value="Business & Money">Business & Money</option>
                    <option value="Law & Criminology">Law & Criminology</option>
                    <option value="Politics & Social Sciences">Politics & Social Sciences</option>
                    <option value="Religion & Spirituality">Religion & Spirituality</option>
                    <option value="Education & Teaching">Education & Teaching</option>
                    <option value="Travel">Travel</option>
                    <option value="True Crime">True Crime</option>
                </Form.Select>

                <Form.Label>Quality</Form.Label>
                <Form.Select>
                    <option value="New Condition">New Condition</option>
                    <option value="Used Condition">Used Condition</option>
                    <option value="Bad Condition">Bad Condition</option>
                </Form.Select>

                <Form.Label>Language</Form.Label>
                <Form.Select aria-label="Language">
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Portugese">Portugese</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Russian">Russian</option>
                </Form.Select>

                <Form.Label>Shelf</Form.Label>
                <Form.Control type="text" placeholder="Shelf ID" />

                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock"/>

                <a href="/store" class="btn btn-primary" role="button">Sell Book</a> 

            </Form>
        </Layout>
    )
}

export default AddBookPage