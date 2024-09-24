"use client"

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bnavbar-dark bg-dark">
            <Container fluid>
                <Navbar.Brand href="/" className='text-success'>Druglord&apos;s Legacy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/download" className='text-success'>Game Download</Nav.Link>
                        <Nav.Link href="/roadmap" className='text-success'>Roadmap</Nav.Link>#
                        <Nav.Link href="/" className='text-success'>Communityhub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar