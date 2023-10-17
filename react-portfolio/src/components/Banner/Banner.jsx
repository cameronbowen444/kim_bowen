import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/pngegg.png';
import ReactTypingEffectDemo from '../UI/ReactTypingEffectDemo';
import { HashLink } from 'react-router-hash-link';

import './Banner.css';
// import ParticlesBg from '../UI/ParticlesBg';

const Banner = () => {

    return (
        <section className="banner" id="home">
            {/* <ParticlesBg /> */}
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Portfolio: Kim Bowen
                        </span>
                        <h1>{`Hello, I'm a ...`} 
                            <br />
                            <span className="wrap">
                                <ReactTypingEffectDemo />
                            </span>
                        </h1>
                        <p>
                            I specialize as a Color key artist and have been in the industry of animation for over 30 years. 
                        </p>
                        <HashLink 
                            to={'#contact'}
                            className='banner-button'
                        >
                            Let's Connect
                            <ArrowRightCircle size={25} />
                        </HashLink>
                    </Col>

                    <Col xs={8} md={6} xl={4}>
                        <img src={headerImg} alt="Header Img" className='banner-img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;