import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg1 from "../../assets/img/back1.png"
import hero2 from "../../assets/img/hero-2.png"
import shadow from "../../assets/img/shadow.png"
import colorSharp from '../../assets/img/color-sharp.png'

import './Skills.css';


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Over The Years, I have aquired and mastered many skills in design but specialize in...
                            </p>
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                className='skill-slider'
                            >
                                <div className='item'>
                                    <img src={shadow} alt="hero-1" />
                                    <h5>Colors and Shadows</h5>
                                </div>
                                <div className='item'>
                                    <img src={hero2} alt="skill-2" />
                                    <h5>Photshop Platform</h5>
                                </div>
                                <div className='item'>
                                    <img src={bg1} alt="skill-3" />
                                    <h5>Background Work</h5>
                                </div>
                                <div className='item'>
                                    <img src={hero2} alt="skill-4" />
                                    <h5>2D Animation</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="color" />
        </section>
    )
}

export default Skills;