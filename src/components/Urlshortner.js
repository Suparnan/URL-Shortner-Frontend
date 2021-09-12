import { useEffect, useState } from "react";
import { postUrlShortner, getURLData } from "../Services/user.service.js";
import { toast } from "react-toastify";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    longurl: "",
    shorturl: "",
    urlcode: ""
}

function UrlShortner() {
    const [userData, setUserData] = useState(initialState);
    const [myData, setMyData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    useEffect(() => {
        getURLData()
            .then((resp) => setMyData(resp.data));
    }, [])

    console.log("This is outside useeffect", myData);

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("This is userData", userData);
        postUrlShortner(userData)
            .then((res) => {
                toast.success("Please enter the short link as parameter in localhost");
            })
            .catch(err => {
                toast.error("some error");
            })
    }

    console.log("hi", userData);
    return (
        <div className="App">
            <Container >
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <h3>
                            URL Shortner
                        </h3>
                        <br />
                        <br />
                        <hr />
                        <br />

                        <Form.Label column sm="2">URL address</Form.Label>
                        <Col sm={4}>
                            <Form.Control type="url" value={userData.longurl} name="longurl" placeholder="" onChange={handleChange} />
                        </Col>

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>

                    <br />

                    <Row>
                        <Col sm="2">
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <br />

            <Container>
                <div>
                    <h3 className="text-center">
                        Dashboard
                    </h3>
                    <hr />
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Long URL</th>
                            <th>Short URL</th>
                            <th>URL Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((ele) => {
                            const { longurl, shorturl, urlcode } = ele;
                            return (
                                <tr>
                                    <td>
                                        <a href={longurl}>{longurl}</a>
                                    </td>
                                    <td>
                                        <a href={shorturl}>{shorturl}</a>
                                    </td>
                                    <td>
                                        {urlcode}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>



            </Container>
        </div>
    );
}

export { UrlShortner };