import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import React, { useRef } from "react";



function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" data-bs-theme="light" className='nav_back shadow'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={Logo}
                            width="45"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <p className='ptc d-inline fw-bold'>New Natural Oil Corporation</p> {/* primary-yellow-text */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto ">
                            <Nav.Link href="/" className='nav_hover'>Home</Nav.Link>
                            <Nav.Link href="/about" className='nav_hover'>About Us</Nav.Link>
                            <Nav.Link href="/gallery" className='nav_hover'>Gallery</Nav.Link>
                            <Nav.Link href="/contact" className='nav_hover'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                
            </Navbar>
        </>
    );
}

export default Navigation;