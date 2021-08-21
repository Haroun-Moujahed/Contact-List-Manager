import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import { logOut } from '../../utils'

function NavBar() {

    const history = useHistory()
    const handleLogOut = () => {
        logOut()
        history.push("/")
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/contactsList">Contacts List</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/addContact">
                            + Add Contact
                        </Nav.Link>
                        <Button variant='danger' onClick={handleLogOut}>Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
