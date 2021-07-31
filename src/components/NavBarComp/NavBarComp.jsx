import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import movielogo from './movielogo.png';
import './NavBarComp.css'
function NavBarComp() {
    return (
      <div className="nav-bar">  
        <Navbar bg="dark" >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={movielogo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#/" className="text-warning">Home</Nav.Link>
                    <Nav.Link href="#actors" className="text-warning">Actors</Nav.Link>
                    <Nav.Link href="#movies" className="text-warning">Movies</Nav.Link>
                    {/* <Link to="/actors">Actrors</Link> */}
                    {/* <Link to="/movies">Movies</Link> */}
                </Nav>
            </Container>
        </Navbar>
       
        </div>

    );
}

export default NavBarComp;