import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Menu = ({children}) => {
    return (


        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                <Link className="navbar-brand" to="/">React-Bootstrap</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        {/*<Link className="nav-link" to="/react-buttons">Botones</Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Menu;