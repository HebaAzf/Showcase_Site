import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import logoIcon from '../assets/IconT.png'
import logoText from '../assets/TextLogoT.png'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="nd" collapseOnSelect>
            <Container>
                <LinkContainer to = '/'>
            <Navbar.Brand style={{ marginTop: '-10px', marginBottom: '-10px'  }}>
                <img src = {logoIcon} 
                alt = "BIPOC Artist Hub" style={{ width: '70px', height: 'auto' }}
                />
                <img src = {logoText} 
                alt = "BIPOC Artist Hub" style={{ width: '150px', height: 'auto', marginTop: '20px' }}
                />  
            </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "ms-auto">
                    <LinkContainer to = '/cart'>
                    <Nav.Link><FaShoppingCart/> Cart </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to = '/login'>
                    <Nav.Link> <FaUser/> Sign-In </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header