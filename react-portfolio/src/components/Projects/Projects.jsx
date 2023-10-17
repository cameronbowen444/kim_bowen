import React from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projects from '../../assets/data';
import colorSharp2 from "../../assets/img/color-sharp2.png";

import './Projects.css'

const Projects = () => {
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col size={12} >
                        <h2>Latest Work</h2>
                        <p>
                            The movies and shows below display the last 2 years of my work contribution, if you want to see more of my work please go to <a href="https://www.imdb.com/name/nm2175412/?ref_=fn_al_nm_3" target='_blank' rel="noreferrer">IMBD here.</a>
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index} 
                                                        imgUrl={project.imgUrl}
                                                        title={project.title}
                                                        description={project.description}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="color" />

        </section>
    )
}

export default Projects;