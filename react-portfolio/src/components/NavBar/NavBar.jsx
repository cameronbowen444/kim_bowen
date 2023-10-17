import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';

import navIcon3 from '../../assets/img/nav-icon3.svg';
import './NavBar.css'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

    return (
        <Navbar 
            expand="lg" 
            className={scrolled ? "scrolled" : ""}
        >
            <Container>
                <Navbar.Brand
                    href="/"
                    className='header'
                >
                    KB
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                >
                    
                    <span className='navbar-toggler-icon'>

                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? 'active navbar-link' : "navbar-link"}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills"
                            className={activeLink === "skills" ? 'active navbar-link' : "navbar-link"}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects"
                            className={activeLink === "projects" ? 'active navbar-link' : "navbar-link"}
                            onClick={() => onUpdateActiveLink('projects')}

                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <HashLink 
                            className='nav-button' 
                            to={'#contact'}
                        >
                            <span>Lets Connect</span>
                        </HashLink>
                    </span>
                    <div className='social-icon'>
                        <Link to={"https://www.linkedin.com/in/kim-bowen-a95b5070/"} target="_blank" rel='noopener noreferrer'>
                            <img src={navIcon1} alt="nav-icon1"
                            />
                        </Link>
                        <Link to={"https://www.facebook.com/profile.php?id=100009120024063"} target="_blank" rel='noopener noreferrer'>
                                <img src={navIcon2} alt="nav-icon" />
                            </Link>
                        <Link to={"https://www.instagram.com/kimbowen6/"} target="_blank" rel='noopener noreferrer'>
                            <img src={navIcon3} alt="nav-icon3" />
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar