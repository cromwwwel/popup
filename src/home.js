import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import NewWindow from 'react-new-window'


const Home = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);


    const handleClickPopup = () => {
        let origin = window.location.href;
        let id = document.getElementById("formBasicEmail");
        console.log(id.value);
        window.open(`${origin}react-buttons/${id.value}/${true}`, "", "popup");
    }

    const onKeyDown = (event) => {
        let regex = new RegExp(/^\d+$/);
        console.log(regex.test(event.key));
        if (event.key === "Backspace") return true;
        else if (!regex.test(event.key))
            event.preventDefault();
    }


    return (
        <Container>
            <Form>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <div className="fs-2">HOME</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de correo</Form.Label>
                            <Form.Control placeholder="Id de correo" onKeyDown={onKeyDown}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <Button variant="info" onClick={handleClickPopup}>Popup window</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );

}

export default Home;