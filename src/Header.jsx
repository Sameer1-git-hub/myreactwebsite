import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './index.css';


const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className='navlink'> Sameer Khan</Link>
          <Nav className=" ">
            <NavLink className='navlink' to="/" >Home</NavLink>
            <NavLink className='navlink' to="/about">About</NavLink>
            <NavLink className='navlink' to="/service">Service</NavLink>
            <NavLink className='navlink' to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
