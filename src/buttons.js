import React, {useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";


function Buttons() {
    let {emailId, modal} = useParams();
    useEffect(() => {
        console.log(emailId);
        console.log(modal);
    });

    return (
        <div className="container mt-2">
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>{' '}
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <div className="d-inline fs-4 fw-semibold">
                        El identificador del correo es: {emailId}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <div className="d-inline fs-4 fw-semibold">
                        Se va a mostrar como una modal: {modal}
                    </div>
                </Col>
            </Row>


        </div>
    )
}


export default Buttons;