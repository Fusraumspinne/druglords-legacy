"use client"

import { Container, Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bnavbar-dark position-fixed w_100 custom_blur z-1">
            <Container fluid>
                <Navbar.Brand className='text_white' href="/">Druglord&apos;s Legacy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="/download" className='text_white'>Game Download</Nav.Link>
                        <Nav.Link href="/roadmap" className='text_white'>Roadmap</Nav.Link>
                        <Nav.Link href="/" className='text_white'>Communityhub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar