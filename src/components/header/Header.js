import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Header(){

    return(
        <Navbar className="header" expand="lg">
            <Container>
                <Navbar.Brand>Crochet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-nav-bar" />
                <Navbar.Collapse id="response-nav-bar">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link>Link #1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Link #2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Link #3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Link #4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;