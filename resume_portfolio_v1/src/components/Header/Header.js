import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../../asset/headphone.jpeg'
import {Link} from 'react-router-dom'

import resume from "../../asset/Resume.pdf"

import './Header.css'

class Header extends Component {

    render() {
        return (
            <Container fluid className="header-height header-bg header-shadow">
                <Row >
                    <Col>
                        <Navbar>
                            <Navbar.Brand justify className="rounded mx-auto d-block">
                                <a href="/">
                                    <img src={logo}
                                        className=""
                                        width="50"
                                        length="50"
                                        alt="logo"
                                    />

                                </a>

                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                    <Col xs={6}>
                        <Navbar className="font-weight-normal h4 justify-content-center font-weight-bold" variant="pills">
                            <Nav.Item>
                                <Nav.Link href="/about" className="text-light u-line">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/projects" className="text-light u-line">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/skills" className="text-light u-line">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact" className="text-light u-line">Contact</Nav.Link>
                            </Nav.Item>
                        </Navbar>
                    </Col>
                    <Col>
                        <Navbar className="justify-content-end">
                            <span className="btn-lg"
                                data-placement="bottom" 
                                title="Resume"
                            >
                                <a 
                                    href={resume}
                                    className="fa fa-file-text-o text-light"
                                    target="_blank" 
                                    />
                            </span>

                            <span className="btn btn-social-icon btn-linkedin btn-lg"
                             data-placement="bottom" 
                             title="Linkedin">
                                <a
                                    href="https://www.linkedin.com/in/billfengw/"
                                    className="fa fa-linkedin-square text-light"
                                    target="_blank"
                                />
                            </span>

                            <span className="btn btn-social-icon btn-camera-retro btn-lg"
                             data-placement="bottom" 
                             title="Gallery">
                                <Link
                                    to="/photo"
                                    className="fa fa-camera-retro text-light"
                                />
                            </span>

                        </Navbar>
                    </Col>
                </Row>
            </Container>





        )
    }
}
export default Header;