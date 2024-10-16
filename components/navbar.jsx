"use client"

import { Container, Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="position-fixed w_100 custom_blur z-1">
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
                        <Nav.Link href="/wiki" className='text_white'>Wiki</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar