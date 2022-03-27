import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react"

import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Layout from "../components/layout"
import Row from "react-bootstrap/Row"

const SellPage = ({ placeholder }) => {
    return (
        <Layout pageTitle="Sell Books">

            <Alert variant="success">
            <p className="mb-0">
                You have successfully sold <b>The Lord of the Rings: The Return of the King</b>. 
                Please fill in the following form again if you wish to sell another book.
            </p>
            </Alert>

            <p>Please key in information for the book you are selling here.</p>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Book Title" />
                    </Col>
                    <Col>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="($) CAD" />
                    </Col>
                    <Col>
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="number" placeholder="ISBN" />
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col>
                        <Form.Label>Publication Date</Form.Label>
                        <Form.Control type="date" />
                    </Col>
                    <Col>
                        <Form.Label>Page Count</Form.Label>
                        <Form.Control type="text" placeholder="Page Count" />
                    </Col>
                    <Col>
                        <Form.Label>Word Count</Form.Label>
                        <Form.Control type="text" placeholder="Optional" />
                    </Col>
                </Row>
                
                <br></br>

                <Row>
                    <Col>
                        <Form.Label>Fiction/Non-Fiction</Form.Label>
                        <Form.Select aria-label="Genre">
                            <option selected>Select Option</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Fiction Category</Form.Label>
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
                    </Col>
                    <Col>
                        <Form.Label>Non-Fiction Category</Form.Label>
                        <Form.Select aria-label="Non-Fiction" disabled>
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
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col>
                        <Form.Label>Quality</Form.Label>
                        <Form.Select>
                            <option value="New Condition">New Condition</option>
                            <option value="Used Condition">Used Condition</option>
                            <option value="Bad Condition">Bad Condition</option>
                        </Form.Select>
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
                        <Form.Label>Bookstore</Form.Label>
                        <Form.Control type="text" placeholder="Bookstore" />
                    </Col>
                </Row>

                <br></br>
                
                <a href="/sell" class="btn btn-primary" role="button">Sell Book</a>
            </Form>
        </Layout>
    )
}

export default SellPage