import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../../banner_images/logo.png'
import CustomLink from '../../../CustomLink/CustomLink';
import auth from '../../../firebase.init';
const Header = () => {
    const[user] = useAuthState(auth);
    const logOut = ()=>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <CustomLink className='px-4 text-white fs-4' to="/home">
                    <img
                        style={{ height: "30px", width: '30px' }}
                        src={logo}
                        alt='img' />
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='px-4 text-white fs-4' to="/services">Services</CustomLink>
                        <CustomLink className='px-4 text-white fs-4' to="/experts">Experts</CustomLink>
                    </Nav>
                    <Nav>
                       {
                           user ? <button onClick={logOut}>Sign Out</button>
                            :<CustomLink className='px-4 text-white fs-4'  to='/login'>Login</CustomLink>
                       }
                        <CustomLink className='px-4 text-white fs-4'  to='/about'>About</CustomLink>
                        <CustomLink className='px-4 text-white fs-4'  to='/contact'>Contact</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;