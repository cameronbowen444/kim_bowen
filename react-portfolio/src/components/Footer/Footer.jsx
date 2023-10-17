import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { Link } from 'react-router-dom';

import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6} >
                        <h1 className='footer-head'>Kim Bowen</h1>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='footer-social-icon'>
                            <Link to={"https://www.linkedin.com/in/kim-bowen-a95b5070/"} target="_blank" rel='noopener noreferrer'>
                                <img src={navIcon1} alt="nav-icon" />
                            </Link>
                            <Link to={"https://www.facebook.com/profile.php?id=100009120024063"} target="_blank" rel='noopener noreferrer'>
                                <img src={navIcon2} alt="nav-icon" />
                            </Link>
                            <Link to={"https://www.instagram.com/kimbowen6/"} target="_blank" rel='noopener noreferrer'>
                                <img src={navIcon3} alt="nav-icon" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer