import React from 'react'
import {Navbar , Nav} from 'react-bootstrap';
import moon from '../images/moon.png'

function NavBar() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt="logo"
                    src={moon}
                    width="25"
                    height="25"
                    className="d-inline-block align-top"
                />{' '}
                Ahmet Aydın
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Ana Sayfa</Nav.Link>
                        <Nav.Link href="/about">Hakkımda</Nav.Link>
                        <Nav.Link href="/project">Projeler</Nav.Link>
                        <Nav.Link href="/contact">İletişim</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar