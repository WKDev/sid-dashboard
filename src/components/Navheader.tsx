import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logoImage from '../assets/sid_horizontal.png'
import '../styles/nav.css'
function Navheader() {

    const expand = 'md';
    return (
        <>
            <Navbar key={expand} bg="light" expand={expand} className="mb-2">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src={logoImage}
                            width="110"
                            height="30"
                            className="sid-logo"
                            alt="SID"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                에스아이디
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="ioss">디지털 허수아비</Nav.Link>
                                <Nav.Link href="iotr">디지털 트랩</Nav.Link>
                                {/* <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            {/* <Form className="d-flex"> */}
                                {/* <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                /> */}
                                {/* <Button variant="outline-primary">디지털 허수아비</Button>
                                <Button variant="outline-primary">디지털 트랩</Button> */}

                            {/* </Form> */}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navheader;

