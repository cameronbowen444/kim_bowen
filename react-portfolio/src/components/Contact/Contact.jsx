import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactBg from '../../assets/img/back.png';
import { useForm } from 'react-hook-form'

import './Contact.css';
const Contact = () => {

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    
                    <Col>
                        <h2>Get In Touch</h2>
                        <div className='img-wrapper'>
                            <img src={contactBg} alt="contact" />
                        </div>
                        <form 
                            onSubmit={onSubmit}
                            target='_blank'
                            // send test message and change email to key when Kim is availble is here https://www.youtube.com/watch?v=JSJ8ftr92Vw&t=1072s
                            // action='https://formsubmit.co/colorkim61@gmail.com'
                            method="POST"
                        >
                            <Row>
                                <Col sm={12} className='px-1'>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your full name'
                                        {
                                            ...register("name", {
                                                required: true,
                                                maxLength: 100,
                                            })
                                        }
                                    />
                                    {
                                        errors.name && (
                                            <p className='contact_error'>
                                                {errors.name.type === 'required' && "This field is required."}
                                                {errors.name.type === 'maxLength' && "Max length is 100 characters."}

                                            </p>
                                        )
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className='px-1'>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your email'
                                        {
                                            ...register("email", {
                                                required: true,
                                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            })
                                        }
                                    />
                                    {
                                        errors.email && (
                                            <p className='contact_error'>
                                                {errors.email.type === 'required' && "This field is required."}
                                                {errors.email.type === 'pattern' && "Invalid email address."}

                                            </p>
                                        )
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className='px-1'>
                                    <textarea 
                                        type="text" 
                                        rows={4}
                                        placeholder='Enter your message'
                                        {
                                            ...register("message", {
                                                required: true,
                                                maxLength: 2000,
                                            })
                                        }
                                    />
                                    {
                                        errors.message && (
                                            <p className='contact_error'>
                                                {errors.message.type === 'required' && "This field is required."}
                                                {errors.message.type === 'maxLength' && "Max length is 2000 characters."}

                                            </p>
                                        )
                                    }
                                </Col>
                                <button type='submit'>
                                    <span>Send</span>
                                </button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;