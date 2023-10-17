import React from 'react';
import { Col } from 'react-bootstrap';


const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col xs={10} sm={6} md={4} lg={4} xl={3} size={10}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt="project-1" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;