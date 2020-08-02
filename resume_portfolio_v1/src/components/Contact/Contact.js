import React, { Component } from 'react'
import Jumpbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Header from '../Header/Header'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Contact extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
    }

    render() {
        return (
            <Jumpbotron fluid className="site-bg" style={{ height: '100vh' }} >
                <Header />
                <Container className="text-light vertical-center">
                    <Row>
                        <Col className="col-6">
                            <h1 className="display-4 theme-color">Contact Me</h1>
                            <p>If you have any questions, please don't hesitate to contact me <a href="mailto:bill21223@gmail.com" target="_blank">Here </a> or using the form below. I will get back to you ASAP!</p>
                            <form action="https://formspree.io/bill21223@gmail.com" method="POST">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            placeholder="Email Address"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Control type="text" name="subject" placeholder="Subject" />
                                </Form.Group>

                                <Form.Group>
                                    <InputGroup>
                                        <FormControl
                                            as="textarea"
                                            placeholder="Message"
                                            name="text"
                                            value={this.state.text}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </form>
                        </Col>
                        <Col className="col-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29910.719242338146!2d-121.88854401479747!3d37.33732430345084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan+Jos%C3%A9+State+University!5e0!3m2!1sen!2sus!4v1558310980404!5m2!1sen!2sus"
                                width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </ Jumpbotron >

        )

    }
}

export default Contact